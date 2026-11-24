using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record UtteranceDataSortBy
{
    /// <summary>
    /// The measure by which to sort the utterance analytics data. Count – The number of utterances. UtteranceTimestamp – The date and time of the utterance.
    /// </summary>
    [JsonPropertyName("name")]
    public string Name { get; } = "UtteranceTimestamp";

    /// <summary>
    /// Specifies whether to sort the results in ascending or descending order.
    /// </summary>
    [JsonPropertyName("order")]
    public required Order2 Order { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
