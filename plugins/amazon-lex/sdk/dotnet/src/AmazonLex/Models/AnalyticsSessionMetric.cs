using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record AnalyticsSessionMetric
{
    /// <summary>
    /// The metric for which you want to get session summary statistics. Count – The number of sessions. Success – The number of sessions that succeeded. Failure – The number of sessions that failed. Dropped – The number of sessions that the user dropped. Duration – The duration of sessions. TurnsPerSession – The number of turns in the sessions. Concurrency – The number of sessions occurring in the same period of time.
    /// </summary>
    [JsonPropertyName("name")]
    public required Name16 Name { get; init; }

    /// <summary>
    /// The summary statistic to calculate. Sum – The total count for the category you provide in name. Average – The total count divided by the number of sessions in the category you provide in name. Max – The highest count in the category you provide in name.
    /// </summary>
    [JsonPropertyName("statistic")]
    public required Statistic4 Statistic { get; init; }

    /// <summary>
    /// Specifies whether to sort the results in ascending or descending order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order")]
    public Order2? Order { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
