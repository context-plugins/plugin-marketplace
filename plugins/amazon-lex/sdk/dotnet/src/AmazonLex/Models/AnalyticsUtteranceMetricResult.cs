using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record AnalyticsUtteranceMetricResult
{
    /// <summary>
    /// The metric that you requested. Count – The number of utterances. Missed – The number of utterances that Amazon Lex failed to recognize. Detected – The number of utterances that Amazon Lex managed to detect. UtteranceTimestamp – The date and time of the utterance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public Name22? Name { get; init; }

    /// <summary>
    /// The summary statistic that you requested to calculate. Sum – The total count for the category you provide in name. Average – The total count divided by the number of utterances in the category you provide in name. Max – The highest count in the category you provide in name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statistic")]
    public Statistic7? Statistic { get; init; }

    /// <summary>
    /// The value of the summary statistic for the metric that you requested.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public double? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
