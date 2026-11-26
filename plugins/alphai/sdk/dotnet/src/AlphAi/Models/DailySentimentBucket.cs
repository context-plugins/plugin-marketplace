using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Models;

namespace AlphAi.Models;

public record DailySentimentBucket
{
    [JsonPropertyName("day")]
    public required DateTimeOffset Day { get; init; }

    [JsonPropertyName("bullish")]
    public required int Bullish { get; init; }

    [JsonPropertyName("neutral")]
    public required int Neutral { get; init; }

    [JsonPropertyName("bearish")]
    public required int Bearish { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
