using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record AnalyticsSessionMetricResult
{
    /// <summary>
    /// The metric that you requested. Count – The number of sessions. Success – The number of sessions that succeeded. Failure – The number of sessions that failed. Dropped – The number of sessions that the user dropped. Duration – The duration of sessions. TurnPersession – The number of turns in the sessions. Concurrency – The number of sessions occurring in the same period of time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public Name17? Name { get; init; }

    /// <summary>
    /// The summary statistic that you requested to calculate. Sum – The total count for the category you provide in name. Average – The total count divided by the number of sessions in the category you provide in name. Max – The highest count in the category you provide in name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statistic")]
    public Statistic5? Statistic { get; init; }

    /// <summary>
    /// The value of the summary statistic for the metric that you requested.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public double? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
