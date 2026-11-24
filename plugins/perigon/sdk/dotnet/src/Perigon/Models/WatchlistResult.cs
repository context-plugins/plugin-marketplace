using System.Text.Json.Serialization;
using Perigon.Core.Models;

namespace Perigon.Models;

/// <summary>
/// Single watchlist response.
/// </summary>
public record WatchlistResult
{
    /// <summary>
    /// Watchlist of people and companies for use with monitors.
    /// </summary>
    [JsonPropertyName("data")]
    public required WatchlistDto Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
