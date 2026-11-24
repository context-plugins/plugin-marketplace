using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;
using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Models;

public record UtteranceEvent
{
    /// <summary>
    /// The unique identifier that is associated with the specified UtteranceEvent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UtteranceId")]
    public string? UtteranceId { get; init; }

    /// <summary>
    /// Indicates whether the segment in the UtteranceEvent is complete (FALSE) or partial (TRUE).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IsPartial")]
    public bool? IsPartial { get; init; }

    /// <summary>
    /// Provides the role of the speaker for each audio channel, either CUSTOMER or AGENT.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ParticipantRole")]
    public ParticipantRole1AmazonTranscribeServiceOperationsApi? ParticipantRole { get; init; }

    /// <summary>
    /// The time, in milliseconds, from the beginning of the audio stream to the start of the UtteranceEvent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BeginOffsetMillis")]
    public int? BeginOffsetMillis { get; init; }

    /// <summary>
    /// The time, in milliseconds, from the beginning of the audio stream to the start of the UtteranceEvent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndOffsetMillis")]
    public int? EndOffsetMillis { get; init; }

    /// <summary>
    /// Contains transcribed text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Transcript")]
    public string? Transcript { get; init; }

    /// <summary>
    /// Contains words, phrases, or punctuation marks that are associated with the specified UtteranceEvent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Items")]
    public IReadOnlyList<CallAnalyticsItem>? Items { get; init; }

    /// <summary>
    /// Contains entities identified as personally identifiable information (PII) in your transcription output.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Entities")]
    public IReadOnlyList<CallAnalyticsEntity>? Entities { get; init; }

    /// <summary>
    /// Provides the sentiment that was detected in the specified segment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Sentiment")]
    public SentimentAmazonTranscribeServiceOperationsApi? Sentiment { get; init; }

    /// <summary>
    /// Provides the issue that was detected in the specified segment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("IssuesDetected")]
    public IReadOnlyList<IssueDetected>? IssuesDetected { get; init; }

    /// <summary>
    /// The language code that represents the language spoken in your audio stream.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageCode")]
    public LanguageCode1AmazonTranscribeServiceOperationsApi? LanguageCode { get; init; }

    /// <summary>
    /// The language code of the dominant language identified in your stream.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LanguageIdentification")]
    public IReadOnlyList<CallAnalyticsLanguageWithScore>? LanguageIdentification { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
