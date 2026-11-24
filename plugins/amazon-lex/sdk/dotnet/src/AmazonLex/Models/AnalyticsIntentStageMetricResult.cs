using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record AnalyticsIntentStageMetricResult
{
    /// <summary>
    /// The metric that you requested. Count – The number of times the intent stage occurred. Success – The number of times the intent stage succeeded. Failure – The number of times the intent stage failed. Dropped – The number of times the user dropped the intent stage. Retry – The number of times the bot tried to elicit a response from the user at this stage.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public Name11? Name { get; init; }

    /// <summary>
    /// The summary statistic that you requested to calculate. Sum – The total count for the category you provide in name. Average – The total count divided by the number of intent stages in the category you provide in name. Max – The highest count in the category you provide in name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statistic")]
    public Statistic3? Statistic { get; init; }

    /// <summary>
    /// The value of the summary statistic for the metric that you requested.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public double? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
