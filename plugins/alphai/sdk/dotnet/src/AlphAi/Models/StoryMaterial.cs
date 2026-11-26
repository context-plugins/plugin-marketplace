using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Models;
using AlphAi.Core.Validation.Attributes;

namespace AlphAi.Models;

public record StoryMaterial
{
    /// <summary>
    /// The article's uid — <c>/api/news/{uid}/</c> has the enriched row.
    /// </summary>
    [JsonPropertyName("uid")]
    public required string Uid { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// Source domain.
    /// </summary>
    [JsonPropertyName("publisher")]
    public required string Publisher { get; init; }

    [JsonPropertyName("time_published")]
    public required DateTimeOffset TimePublished { get; init; }

    /// <summary>
    /// The publisher's own URL of the article.
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonPropertyName("relevance_score")]
    [Minimum(1)]
    [Maximum(10)]
    public required int RelevanceScore { get; init; }

    /// <summary>
    /// Whether the article passes AlphAI's quality gate (relevance 7+, tickers, a news category, new information); the story page links such articles to their alphai.io page. Informational — the API serves every row regardless.
    /// </summary>
    [JsonPropertyName("seo_eligible")]
    public required bool SeoEligible { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
