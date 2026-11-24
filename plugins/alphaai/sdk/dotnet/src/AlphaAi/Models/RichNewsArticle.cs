using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;

namespace AlphaAi.Models;

public record RichNewsArticle
{
    /// <summary>
    /// The article as fetched from the source. <c>raw_text</c> is intentionally NOT exposed here.
    /// </summary>
    [JsonPropertyName("original")]
    public required OriginalArticle Original { get; init; }

    [JsonPropertyName("enrichment")]
    public required EnrichedArticle Enrichment { get; init; }

    /// <summary>
    /// Present only on <c>/api/news/search/</c> rows — how this article matched the query. <c>null</c> on every other endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("search_match")]
    public SearchMatch? SearchMatch { get; init; }

    /// <summary>
    /// AlphAI's structured read of the company's SEC earnings filing (8-K item 2.02, or a foreign private issuer's 6-K earnings release). Present only on a major ticker's earnings article whose figures cleared a cross-check against the filing text; null on every other article.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("earnings")]
    public EarningsReport? Earnings { get; init; }

    /// <summary>
    /// The story this article belongs to: a permanent key, the same value for a given story on every surface (<c>/api/news/</c>, search, trending, the MCP tools and <c>/api/stories/</c>) and across calls. Filled on every row of <c>/api/news/</c> and <c>/api/news/search/</c> since 1.49.0, and always on <c>/api/news/trending/</c>; a lone article is a story of one and names itself. The value is the <c>uid</c> of the story's first root article and does not change when a stronger copy later takes the root over or two stories merge (before 1.49.0 it followed the live root and could move once). Resolve it with <c>/api/stories/{story_id}/</c>: <c>found</c> is a story summarised from two or more publishers, <c>not_a_story</c> means one publisher carried the event (<c>/api/news/{uid}/</c> has the article), <c>merged</c> names the surviving story. <c>/api/news/{uid}/</c> carries it too; null only on <c>/api/news/{uid}/related/</c>. The <c>sources_count</c> / <c>sources</c> pair stays collapse-only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("story_id")]
    public string? StoryId { get; init; }

    /// <summary>
    /// Story-collapsed responses only. Number of distinct outlets (source domains) covering this story; the same outlet running it more than once counts once. Most stories are carried by a single outlet, so this is usually 1. Treat a value above 1 as the signal, not the number itself. May exceed the length of <c>sources</c>, which is capped at 10. <c>null</c> in the default feed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sources_count")]
    public int? SourcesCount { get; init; }

    /// <summary>
    /// Story-collapsed responses only. Distinct source domains covering this story, in first-appearance order, capped at 10. <c>null</c> in the default feed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sources")]
    public IReadOnlyList<string>? Sources { get; init; }

    /// <summary>
    /// <c>/api/news/insider/</c> and <c>/api/news/{uid}/</c> — the structured SEC Form 4 event block, on every row whose source is a Form 4. <c>null</c> on every other row, on the other endpoints, and on rows without paired transaction data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("insider")]
    public InsiderEvent? Insider { get; init; }

    /// <summary>
    /// <c>/api/news/</c> and <c>/api/news/{uid}/</c> — the structured SEC 8-K filing block, present on every row whose source is an 8-K (<c>original.source</c> is <c>SEC EDGAR 8-K</c>; filter them with <c>source_type=sec_form8k</c> or <c>item=</c>). <c>null</c> on press, Form 4 and 6-K rows, on the other endpoints, and on the rare 8-K row without structured data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filing")]
    public EightKFiling? Filing { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
