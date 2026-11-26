using System.Text.Json.Serialization;
using AlphAi.Core.Models;
using AlphAi.Models.AnyOf;
using AlphAi.Models.Enums;

namespace AlphAi.Models;

public record RadarSignalAccess
{
    [JsonPropertyName("tier")]
    public required Tier Tier { get; init; }

    [JsonPropertyName("delay_seconds")]
    public required int DelaySeconds { get; init; }

    [JsonPropertyName("scope")]
    public required Scope Scope { get; init; }

    [JsonPropertyName("watchlist_count")]
    public required WatchlistCount WatchlistCount { get; init; }

    [JsonPropertyName("watchlist_limit")]
    public required WatchlistLimit WatchlistLimit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
