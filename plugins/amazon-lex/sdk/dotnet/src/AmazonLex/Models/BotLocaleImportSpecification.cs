using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record BotLocaleImportSpecification
{
    /// <summary>
    /// The identifier of the bot to import the locale to.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The version of the bot to import the locale to. This can only be the DRAFT version of the bot.
    /// </summary>
    [JsonPropertyName("botVersion")]
    public required string BotVersion { get; init; }

    /// <summary>
    /// The identifier of the language and locale that the bot will be used in. The string must match one of the supported locales. All of the intents, slot types, and slots used in the bot must have the same locale. For more information, see Supported languages.
    /// </summary>
    [JsonPropertyName("localeId")]
    public required string LocaleId { get; init; }

    /// <summary>
    /// Determines the threshold where Amazon Lex will insert the AMAZON.FallbackIntent, AMAZON.KendraSearchIntent, or both when returning alternative intents. AMAZON.FallbackIntent and AMAZON.KendraSearchIntent are only inserted if they are configured for the bot. For example, suppose a bot is configured with the confidence threshold of 0.80 and the AMAZON.FallbackIntent. Amazon Lex returns three alternative intents with the following confidence scores: IntentA (0.70), IntentB (0.60), IntentC (0.50). The response from the PostText operation would be: AMAZON.FallbackIntent IntentA IntentB IntentC
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nluIntentConfidenceThreshold")]
    public double? NluIntentConfidenceThreshold { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("voiceSettings")]
    public VoiceSettings? VoiceSettings { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("speechRecognitionSettings")]
    public SpeechRecognitionSettings? SpeechRecognitionSettings { get; init; }

    /// <summary>
    /// The sensitivity level for voice activity detection (VAD) in the bot locale. This setting helps optimize speech recognition accuracy by adjusting how the system responds to background noise during voice interactions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("speechDetectionSensitivity")]
    public SpeechDetectionSensitivity? SpeechDetectionSensitivity { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unifiedSpeechSettings")]
    public UnifiedSpeechSettings? UnifiedSpeechSettings { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audioFillerSettings")]
    public AudioFillerSettings? AudioFillerSettings { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("speakerDiarizationSettings")]
    public SpeakerDiarizationSettings? SpeakerDiarizationSettings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
