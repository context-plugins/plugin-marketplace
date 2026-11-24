using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record AggregatedUtterancesSortBy
{
    /// <summary>
    /// The utterance attribute to sort by.
    /// </summary>
    [JsonPropertyName("attribute")]
    public required AttributeEnum Attribute { get; init; }

    /// <summary>
    /// Specifies whether to sort the aggregated utterances in ascending or descending order.
    /// </summary>
    [JsonPropertyName("order")]
    public required Order Order { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
