using System.Collections.Generic;
using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Paginated list of watchlists.
/// </summary>
public record WatchlistListResult
{
    /// <summary>
    /// Total number of matching watchlists across all pages.
    /// </summary>
    [JsonPropertyName("total")]
    public required long Total { get; init; }

    /// <summary>
    /// Watchlists returned for the requested page.
    /// </summary>
    [JsonPropertyName("data")]
    public required IReadOnlyList<WatchlistDto> Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
