using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record AggregatedUtterancesSummary
{
    /// <summary>
    /// The text of the utterance. If the utterance was used with the RecognizeUtterance operation, the text is the transcription of the audio utterance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("utterance")]
    public string? Utterance { get; init; }

    /// <summary>
    /// The number of times that the utterance was detected by Amazon Lex during the time period. When an utterance is detected, it activates an intent or a slot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hitCount")]
    public int? HitCount { get; init; }

    /// <summary>
    /// The number of times that the utterance was missed by Amazon Lex An utterance is missed when it doesn't activate an intent or slot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("missedCount")]
    public int? MissedCount { get; init; }

    /// <summary>
    /// The date and time that the utterance was first recorded in the time window for aggregation. An utterance may have been sent to Amazon Lex before that time, but only utterances within the time window are counted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("utteranceFirstRecordedInAggregationDuration")]
    public DateTimeOffset? UtteranceFirstRecordedInAggregationDuration { get; init; }

    /// <summary>
    /// The last date and time that an utterance was recorded in the time window for aggregation. An utterance may be sent to Amazon Lex after that time, but only utterances within the time window are counted.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("utteranceLastRecordedInAggregationDuration")]
    public DateTimeOffset? UtteranceLastRecordedInAggregationDuration { get; init; }

    /// <summary>
    /// Aggregated utterance data may contain utterances from versions of your bot that have since been deleted. When the aggregated contains this kind of data, this field is set to true.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("containsDataFromDeletedResources")]
    public bool? ContainsDataFromDeletedResources { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
