using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record AnalyticsUtteranceMetric
{
    /// <summary>
    /// The metric for which you want to get utterance summary statistics. Count – The number of utterances. Missed – The number of utterances that Amazon Lex failed to recognize. Detected – The number of utterances that Amazon Lex managed to detect. UtteranceTimestamp – The date and time of the utterance.
    /// </summary>
    [JsonPropertyName("name")]
    public required Name21 Name { get; init; }

    /// <summary>
    /// The summary statistic to calculate. Sum – The total count for the category you provide in name. Average – The total count divided by the number of utterances in the category you provide in name. Max – The highest count in the category you provide in name.
    /// </summary>
    [JsonPropertyName("statistic")]
    public required Statistic6 Statistic { get; init; }

    /// <summary>
    /// Specifies whether to sort the results in ascending or descending order.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("order")]
    public Order2? Order { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
