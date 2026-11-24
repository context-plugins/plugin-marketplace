using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;

namespace AlphaAi.Models;

public record InsiderClustersPage
{
    [JsonPropertyName("results")]
    public required IReadOnlyList<InsiderCluster> Results { get; init; }

    /// <summary>
    /// Opaque cursor for the next page (pass back with the same <c>sort</c>); <c>null</c> at the end.
    /// </summary>
    [JsonPropertyName("next_cursor")]
    public required string? NextCursor { get; init; }

    [JsonPropertyName("meta")]
    public required InsiderClustersMeta Meta { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
