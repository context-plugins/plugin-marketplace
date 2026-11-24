using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record CreateBotLocaleResponse
{
    /// <summary>
    /// The specified bot identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botId")]
    public string? BotId { get; init; }

    /// <summary>
    /// The specified bot version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botVersion")]
    public string? BotVersion { get; init; }

    /// <summary>
    /// The specified locale name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localeName")]
    public string? LocaleName { get; init; }

    /// <summary>
    /// The specified locale identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localeId")]
    public string? LocaleId { get; init; }

    /// <summary>
    /// The specified description of the bot locale.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The specified confidence threshold for inserting the AMAZON.FallbackIntent and AMAZON.KendraSearchIntent intents.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nluIntentConfidenceThreshold")]
    public double? NluIntentConfidenceThreshold { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("voiceSettings")]
    public VoiceSettings? VoiceSettings { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unifiedSpeechSettings")]
    public UnifiedSpeechSettings? UnifiedSpeechSettings { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audioFillerSettings")]
    public AudioFillerSettings? AudioFillerSettings { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("speechRecognitionSettings")]
    public SpeechRecognitionSettings? SpeechRecognitionSettings { get; init; }

    /// <summary>
    /// The status of the bot. When the status is Creating the bot locale is being configured. When the status is Building Amazon Lex is building the bot for testing and use. If the status of the bot is ReadyExpressTesting, you can test the bot using the exact utterances specified in the bots' intents. When the bot is ready for full testing or to run, the status is Built. If there was a problem with building the bot, the status is Failed. If the bot was saved but not built, the status is NotBuilt.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botLocaleStatus")]
    public BotLocaleStatus2? BotLocaleStatus { get; init; }

    /// <summary>
    /// A timestamp specifying the date and time that the bot locale was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creationDateTime")]
    public DateTimeOffset? CreationDateTime { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("generativeAISettings")]
    public GenerativeAiSettings? GenerativeAiSettings { get; init; }

    /// <summary>
    /// The sensitivity level for voice activity detection (VAD) that was specified for the bot locale.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("speechDetectionSensitivity")]
    public SpeechDetectionSensitivity1? SpeechDetectionSensitivity { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("speakerDiarizationSettings")]
    public SpeakerDiarizationSettings? SpeakerDiarizationSettings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
