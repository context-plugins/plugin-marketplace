using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DoiT.Models;

public record GeographicAccessCustomRegionsResponse
{
    /// <summary>
    /// Ready custom regions owned by the authenticated tenant.
    /// </summary>
    [JsonPropertyName("customRegions")]
    public required IReadOnlyList<GeographicAccessCustomRegion> CustomRegions { get; init; }
}
