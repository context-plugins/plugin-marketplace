using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record UtteranceAggregationDuration
{
    [JsonPropertyName("relativeAggregationDuration")]
    public required RelativeAggregationDuration RelativeAggregationDuration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
