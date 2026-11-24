using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Journalist search result
/// </summary>
public record JournalistSearchResult
{
    [JsonPropertyName("status")]
    public required int Status { get; init; }

    [JsonPropertyName("numResults")]
    public required long NumResults { get; init; }

    [JsonPropertyName("results")]
    public required IReadOnlyList<Journalist> Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
