using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record AnalyticsIntentMetricResult
{
    /// <summary>
    /// The metric that you requested. See Key definitions for more details about these metrics. Count – The number of times the intent was invoked. Success – The number of times the intent succeeded. Failure – The number of times the intent failed. Switched – The number of times there was a switch to a different intent. Dropped – The number of times the user dropped the intent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public Name6? Name { get; init; }

    /// <summary>
    /// The statistic that you requested to calculate. Sum – The total count for the category you provide in name. Average – The total count divided by the number of intents in the category you provide in name. Max – The highest count in the category you provide in name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("statistic")]
    public Statistic1? Statistic { get; init; }

    /// <summary>
    /// The value of the summary statistic for the metric that you requested.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public double? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
