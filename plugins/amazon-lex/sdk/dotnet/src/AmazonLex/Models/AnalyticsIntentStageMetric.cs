using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record AnalyticsIntentStageMetric
{
    /// <summary>
    /// The metric for which you want to get intent stage summary statistics. See Key definitions for more details about these metrics. Count – The number of times the intent stage occurred. Success – The number of times the intent stage succeeded. Failure – The number of times the intent stage failed. Dropped – The number of times the user dropped the intent stage. Retry – The number of times the bot tried to elicit a response from the user at this stage.
    /// </summary>
    [JsonPropertyName("name")]
    public required Name10 Name { get; init; }

    /// <summary>
    /// The summary statistic to calculate. Sum – The total count for the category you provide in name. Average – The total count divided by the number of intent stages in the category you provide in name. Max – The highest count in the category you provide in name.
    /// </summary>
    [JsonPropertyName("statistic")]
    public required Statistic2 Statistic { get; init; }

    /// <summary>
    /// Specifies whether to sort the results in ascending or descending order of the summary statistic (value in the response).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order")]
    public Order3? Order { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
