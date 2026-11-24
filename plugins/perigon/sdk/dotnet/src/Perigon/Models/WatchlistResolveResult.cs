using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Resolved watchlists response.
/// </summary>
public record WatchlistResolveResult
{
    /// <summary>
    /// Resolved watchlists.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<WatchlistDto> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
