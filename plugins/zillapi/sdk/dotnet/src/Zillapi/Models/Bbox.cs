using System.Text.Json.Serialization;
using Zillapi.Core.Models;

namespace Zillapi.Models;

/// <summary>
/// Bounding box in decimal degrees. REQUIRED unless searchUrls is supplied at the request level — the search engine needs a real bounding box to render results.
/// </summary>
public record Bbox
{
    [JsonPropertyName("west")]
    public required double West { get; init; }

    [JsonPropertyName("south")]
    public required double South { get; init; }

    [JsonPropertyName("east")]
    public required double East { get; init; }

    [JsonPropertyName("north")]
    public required double North { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
