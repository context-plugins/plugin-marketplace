using System.Text.Json.Serialization;
using Soda.Core.Models;

namespace Soda.Models;

public record HistogramBinContentDto
{
    [JsonPropertyName("count")]
    public required long Count { get; init; }

    [JsonPropertyName("lowerBound")]
    public required double LowerBound { get; init; }

    [JsonPropertyName("upperBound")]
    public required double UpperBound { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
