using System.Text.Json.Serialization;
using AlphaAi.Core.Models;

namespace AlphaAi.Models;

public record RadarSnapshotSummary
{
    [JsonPropertyName("active_tickers")]
    public required int ActiveTickers { get; init; }

    [JsonPropertyName("scored_tickers")]
    public required int ScoredTickers { get; init; }

    [JsonPropertyName("elevated_tickers")]
    public required int ElevatedTickers { get; init; }

    [JsonPropertyName("verified_candidates")]
    public required int VerifiedCandidates { get; init; }

    [JsonPropertyName("collection_unverified")]
    public required int CollectionUnverified { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
