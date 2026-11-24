using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;

namespace AlphaAi.Models;

public record TickerSentimentSummary
{
    [JsonPropertyName("ticker")]
    public required string Ticker { get; init; }

    [JsonPropertyName("days")]
    public required int Days { get; init; }

    /// <summary>
    /// Articles with a sentiment call in the window — the sum of the <c>daily</c> buckets.
    /// </summary>
    [JsonPropertyName("total")]
    public required int Total { get; init; }

    [JsonPropertyName("bullish")]
    public required int Bullish { get; init; }

    [JsonPropertyName("neutral")]
    public required int Neutral { get; init; }

    [JsonPropertyName("bearish")]
    public required int Bearish { get; init; }

    [JsonPropertyName("daily")]
    public required IReadOnlyList<DailySentimentBucket> Daily { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
