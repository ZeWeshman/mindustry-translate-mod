// Setting up translation configuration options in the settings menu
Vars.ui.settings.addCategory("Chat Translation", Icon.book, t => {
    // Options to enable or disable incoming chat translations
    t.checkPref("Translate Incoming Chat", false, bool => {
        Vars.settings.putBool("translateIncoming", bool);
    });

    // Options to enable or disable outgoing chat translations
    t.checkPref("Translate Outgoing Chat", false, bool => {
        Vars.settings.putBool("translateOutgoing", bool);
    });

    // Target language for incoming messages (default is English 'en')
    t.textPref("Target Language", "en", lang => {
        Vars.settings.put("targetLang", lang);
    });

    // Outgoing language (default is English 'en')
    t.textPref("Outgoing Language", "en", lang => {
        Vars.settings.put("outgoingLang", lang);
    });

    // Optional: URL of the LibreTranslate instance (default is libretranslate.com)
    t.textPref("LibreTranslate API URL", "https://libretranslate.com", url => {
        Vars.settings.put("libreTranslateUrl", url);
    });
});

// Function to call LibreTranslate API for translation
function translateMessage(text, targetLang, callback) {
    const libreTranslateUrl = Vars.settings.get("libreTranslateUrl", "https://libretranslate.com");
    const url = libreTranslateUrl + "/translate";

    // Prepare the HTTP POST request to LibreTranslate
    const payload = {
        q: text,
        target: targetLang
    };

    Http.post(url, JSON.stringify(payload), (res) => {
        try {
            const result = JSON.parse(res.result);
            const translatedText = result.translatedText;
            callback(translatedText);
        } catch (e) {
            callback("[Translate Error] Invalid response from LibreTranslate.");
        }
    }, (error) => {
        callback("[Translate Error] " + error);
    });
}

// Intercept incoming chat messages
Events.on(EventType.PlayerChatEvent, event => {
    if (Vars.settings.getBool("translateIncoming", false)) {
        const targetLang = Vars.settings.get("targetLang", "en");
        translateMessage(event.message, targetLang, translatedText => {
            Call.sendMessage(event.player.name + ": " + translatedText);
        });
    }
});

// Intercept outgoing chat messages
Vars.ui.chatfrag.addSendMessage = (message) => {
    if (Vars.settings.getBool("translateOutgoing", false)) {
        const outgoingLang = Vars.settings.get("outgoingLang", "en");
        translateMessage(message, outgoingLang, translatedText => {
            Call.sendChatMessage(translatedText);
        });
    } else {
        Call.sendChatMessage(message);
    }
};
