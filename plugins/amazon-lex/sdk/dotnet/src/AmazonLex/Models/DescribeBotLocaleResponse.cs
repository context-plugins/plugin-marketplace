using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record DescribeBotLocaleResponse
{
    /// <summary>
    /// The identifier of the bot associated with the locale.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botId")]
    public string? BotId { get; init; }

    /// <summary>
    /// The version of the bot associated with the locale.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botVersion")]
    public string? BotVersion { get; init; }

    /// <summary>
    /// The unique identifier of the described locale.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localeId")]
    public string? LocaleId { get; init; }

    /// <summary>
    /// The name of the locale.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localeName")]
    public string? LocaleName { get; init; }

    /// <summary>
    /// The description of the locale.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The confidence threshold where Amazon Lex inserts the AMAZON.FallbackIntent and AMAZON.KendraSearchIntent intents in the list of possible intents for an utterance.
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
    /// The number of intents defined for the locale.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentsCount")]
    public int? IntentsCount { get; init; }

    /// <summary>
    /// The number of slot types defined for the locale.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("slotTypesCount")]
    public int? SlotTypesCount { get; init; }

    /// <summary>
    /// The status of the bot. If the status is Failed, the reasons for the failure are listed in the failureReasons field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botLocaleStatus")]
    public BotLocaleStatus4? BotLocaleStatus { get; init; }

    /// <summary>
    /// if botLocaleStatus is Failed, Amazon Lex explains why it failed to build the bot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failureReasons")]
    public IReadOnlyList<string>? FailureReasons { get; init; }

    /// <summary>
    /// The date and time that the locale was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creationDateTime")]
    public DateTimeOffset? CreationDateTime { get; init; }

    /// <summary>
    /// The date and time that the locale was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastUpdatedDateTime")]
    public DateTimeOffset? LastUpdatedDateTime { get; init; }

    /// <summary>
    /// The date and time that the locale was last submitted for building.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastBuildSubmittedDateTime")]
    public DateTimeOffset? LastBuildSubmittedDateTime { get; init; }

    /// <summary>
    /// History of changes, such as when a locale is used in an alias, that have taken place for the locale.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botLocaleHistoryEvents")]
    public IReadOnlyList<BotLocaleHistoryEvent>? BotLocaleHistoryEvents { get; init; }

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
    /// The sensitivity level for voice activity detection (VAD) configured for the bot locale.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("speechDetectionSensitivity")]
    public SpeechDetectionSensitivity2? SpeechDetectionSensitivity { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("speakerDiarizationSettings")]
    public SpeakerDiarizationSettings? SpeakerDiarizationSettings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
