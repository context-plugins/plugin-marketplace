using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Wikipedia vector search result
/// </summary>
public record WikipediaVectorSearchResult
{
    [JsonPropertyName("status")]
    public required int Status { get; init; }

    [JsonPropertyName("results")]
    public required IReadOnlyList<ScoredDataWikiData> Results { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
