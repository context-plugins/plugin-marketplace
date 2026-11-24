using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record AnalyticsIntentMetric
{
    /// <summary>
    /// The metric for which you want to get intent summary statistics. Count – The number of times the intent was invoked. Success – The number of times the intent succeeded. Failure – The number of times the intent failed. Switched – The number of times there was a switch to a different intent. Dropped – The number of times the user dropped the intent.
    /// </summary>
    [JsonPropertyName("name")]
    public required Name5 Name { get; init; }

    /// <summary>
    /// The summary statistic to calculate. Sum – The total count for the category you provide in name. Average – The total count divided by the number of intents in the category you provide in name. Max – The highest count in the category you provide in name.
    /// </summary>
    [JsonPropertyName("statistic")]
    public required Statistic Statistic { get; init; }

    /// <summary>
    /// Specifies whether to sort the results in ascending or descending order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order")]
    public Order2? Order { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
