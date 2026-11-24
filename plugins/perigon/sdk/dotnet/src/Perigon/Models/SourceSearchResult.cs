using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Source search result
/// </summary>
public record SourceSearchResult
{
    [JsonPropertyName("status")]
    public required int Status { get; init; }

    [JsonPropertyName("numResults")]
    public required long NumResults { get; init; }

    [JsonPropertyName("results")]
    public required IReadOnlyList<Source> Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
