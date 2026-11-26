using System.Text.Json.Serialization;
using AlphAi.Core.Models;

namespace AlphAi.Models;

public record RadarCalculationParams
{
    [JsonPropertyName("effective_at")]
    public required int EffectiveAt { get; init; }

    [JsonPropertyName("window_seconds")]
    public required int WindowSeconds { get; init; }

    [JsonPropertyName("baseline_seconds")]
    public required int BaselineSeconds { get; init; }

    [JsonPropertyName("half_life_seconds")]
    public required int HalfLifeSeconds { get; init; }

    [JsonPropertyName("min_relevance")]
    public required int MinRelevance { get; init; }

    [JsonPropertyName("max_story_tickers")]
    public required int MaxStoryTickers { get; init; }

    [JsonPropertyName("prior_stories")]
    public required double PriorStories { get; init; }

    [JsonPropertyName("min_baseline_stories")]
    public required int MinBaselineStories { get; init; }

    [JsonPropertyName("min_baseline_days")]
    public required int MinBaselineDays { get; init; }

    [JsonPropertyName("min_sentiment_stories")]
    public required int MinSentimentStories { get; init; }

    [JsonPropertyName("min_sentiment_coverage")]
    public required double MinSentimentCoverage { get; init; }

    [JsonPropertyName("spike_tail")]
    public required double SpikeTail { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
