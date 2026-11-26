using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphAi.Core.Models;
using AlphAi.Models.AnyOf;

namespace AlphAi.Models;

public record BriefEventDto
{
    [JsonPropertyName("uid")]
    public required string Uid { get; init; }

    [JsonPropertyName("story_id")]
    public required string StoryId { get; init; }

    [JsonPropertyName("title")]
    public required string Title { get; init; }

    [JsonPropertyName("summary")]
    public required string Summary { get; init; }

    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonPropertyName("article_url")]
    public required string ArticleUrl { get; init; }

    [JsonPropertyName("source_domain")]
    public required string SourceDomain { get; init; }

    [JsonPropertyName("source_type")]
    public required string SourceType { get; init; }

    [JsonPropertyName("time_published")]
    public required DateTimeOffset TimePublished { get; init; }

    [JsonPropertyName("matched_tickers")]
    public required IReadOnlyList<string> MatchedTickers { get; init; }

    [JsonPropertyName("category")]
    public required string Category { get; init; }

    [JsonPropertyName("relevance_score")]
    public required int RelevanceScore { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("information_novelty")]
    public InformationNovelty? InformationNovelty { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("actionability")]
    public Actionability1? Actionability { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signals")]
    public IReadOnlyList<BriefSignalDto>? Signals { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("earnings_available")]
    public bool? EarningsAvailable { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
