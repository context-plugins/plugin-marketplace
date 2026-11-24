using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record UpdateBotLocaleResponse
{
    /// <summary>
    /// The identifier of the bot that contains the updated locale.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botId")]
    public string? BotId { get; init; }

    /// <summary>
    /// The version of the bot that contains the updated locale.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botVersion")]
    public string? BotVersion { get; init; }

    /// <summary>
    /// The language and locale of the updated bot locale.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localeId")]
    public string? LocaleId { get; init; }

    /// <summary>
    /// The updated locale name for the locale.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localeName")]
    public string? LocaleName { get; init; }

    /// <summary>
    /// The updated description of the locale.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The updated confidence threshold for inserting the AMAZON.FallbackIntent and AMAZON.KendraSearchIntent intents in the list of possible intents for an utterance.
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
    /// The current status of the locale. When the bot status is Built the locale is ready for use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botLocaleStatus")]
    public BotLocaleStatus5? BotLocaleStatus { get; init; }

    /// <summary>
    /// If the botLocaleStatus is Failed, the failureReasons field lists the errors that occurred while building the bot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failureReasons")]
    public IReadOnlyList<string>? FailureReasons { get; init; }

    /// <summary>
    /// A timestamp of the date and time that the locale was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creationDateTime")]
    public DateTimeOffset? CreationDateTime { get; init; }

    /// <summary>
    /// A timestamp of the date and time that the locale was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastUpdatedDateTime")]
    public DateTimeOffset? LastUpdatedDateTime { get; init; }

    /// <summary>
    /// Recommended actions to take to resolve an error in the failureReasons field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recommendedActions")]
    public IReadOnlyList<string>? RecommendedActions { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("generativeAISettings")]
    public GenerativeAiSettings? GenerativeAiSettings { get; init; }

    /// <summary>
    /// The updated sensitivity level for voice activity detection (VAD) in the bot locale.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("speechDetectionSensitivity")]
    public SpeechDetectionSensitivity4? SpeechDetectionSensitivity { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("speakerDiarizationSettings")]
    public SpeakerDiarizationSettings? SpeakerDiarizationSettings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
