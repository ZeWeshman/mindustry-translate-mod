# Mindustry Translate Chat Mod

This mod adds functionality to translate chat messages in **Mindustry** using the **LibreTranslate API**. Players can translate incoming chat messages to a specified language and outgoing messages to another specified language.

## Features

- **Translate Incoming Chat**: Automatically translates messages from other players into your chosen target language.
- **Translate Outgoing Chat**: Automatically translates your messages into a specified outgoing language before sending.
- **Custom API URL**: Option to use a different instance of LibreTranslate if desired (default is `https://libretranslate.com`).
- **Easy-to-Use UI**: Simple toggles and text inputs in the settings menu to configure the translation features.

## Installation

1. **Download the Mod**:
   - Clone or download the repository containing the mod files.

2. **Folder Structure**:
   Place the mod files in your **Mindustry** mods folder. The structure should look like this:
```
mindustry-translate-mod\
├── scripts\
│   └── main.js
└── mod.json
```

3. **Launch Mindustry**:
Start the game, and the mod should be automatically recognized and loaded.

## Usage

1. **Access the Mod Settings**:
- Go to the **Settings** menu in **Mindustry**.
- Navigate to the **Chat Translation** section.

2. **Configure Translation Options**:
- Enable or disable **Translate Incoming Chat** and **Translate Outgoing Chat** using the toggle options.
- Set the **Target Language** for incoming messages (default is English `en`).
- Set the **Outgoing Language** for your messages (default is English `en`).
- Optionally, enter a different **LibreTranslate API URL** if using a self-hosted instance.

3. **Chat**:
- Once configured, any incoming messages will be translated to your selected target language, and any messages you send will be translated to your specified outgoing language.

## Example Languages

- English: `en`
- Spanish: `es`
- French: `fr`
- German: `de`
- For a full list of supported languages, refer to the [LibreTranslate Documentation](https://libretranslate.com/docs/).

## License

This mod is open-source and available under the MIT License.

## Contributions

Feel free to contribute to this mod by submitting issues or pull requests on the repository. Suggestions for features and improvements are always welcome!

## Contact

For any questions or feedback, please contact [ZeWeshman](ze.weshman@gmail.com).
