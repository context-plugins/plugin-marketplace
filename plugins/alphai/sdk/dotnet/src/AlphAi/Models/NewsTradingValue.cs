using System.Text.Json.Serialization;
using AlphAi.Core.Models;
using AlphAi.Core.Validation.Attributes;
using AlphAi.Models.Enums;

namespace AlphAi.Models;

public record NewsTradingValue
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actionability_score")]
    public Actionability? ActionabilityScore { get; init; }

    /// <summary>
    /// How much NEW information the article carries (1–10), kept separate from relevance: a mega-cap post-earnings recap is high relevance but low novelty. 0 on rows enriched before the field existed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("information_novelty")]
    [Minimum(0)]
    [Maximum(10)]
    public int? InformationNovelty { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timing_relevance")]
    public string? TimingRelevance { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("market_sentiment_alignment")]
    public string? MarketSentimentAlignment { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("estimated_read_time")]
    public string? EstimatedReadTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
