using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Wikipedia search result
/// </summary>
public record WikipediaSearchResult
{
    [JsonPropertyName("status")]
    public required int Status { get; init; }

    [JsonPropertyName("numResults")]
    public required long NumResults { get; init; }

    [JsonPropertyName("results")]
    public required IReadOnlyList<WikiPage> Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
