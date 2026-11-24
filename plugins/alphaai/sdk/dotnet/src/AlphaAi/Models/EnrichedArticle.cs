using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;
using AlphaAi.Core.Validation.Attributes;
using AlphaAi.Models.Enums;

namespace AlphaAi.Models;

public record EnrichedArticle
{
    /// <summary>
    /// <c>market_movers</c> is for articles whose subject IS a notable price move ("AMD up 5% today"); <c>sector_analysis</c> is genuine sector-level analysis; <c>insider</c> covers SEC Form 4 insider transactions only. SEC 8-K filings categorize by their primary item: an earnings release (Item 2.02) is <c>earnings</c>, a completed acquisition or disposition (Item 2.01) is <c>mergers_acquisitions</c>, and the remaining events (material agreements, debt, executive changes, annual-meeting results, and since 2026-09-17 securities offerings, Regulation FD disclosures and other events under Items 7.01/8.01) are <c>corporate_actions</c>. A foreign private issuer's SEC 6-K appears only when it is an earnings release (<c>source</c> "SEC EDGAR 6-K") and is always <c>earnings</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("category")]
    public NewsCategory? Category { get; init; }

    /// <summary>
    /// Validated tickers the article mentions — only symbols present in <c>/api/symbols/</c> survive enrichment-time verification against the article text. Mirrors <c>ai_trading_insights.ticker_analysis[].ticker</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tickers")]
    public IReadOnlyList<string>? Tickers { get; init; }

    /// <summary>
    /// How much trading value the article itself carries (rates the
    /// article, not the company; deterministic — same article, same
    /// score):
    /// 1–2 no trading relevance · 3–4 derivative content about
    /// already-known events · 5–6 macro/sector datapoints, minor-but-real
    /// company news · 7–8 real company news with a fresh catalyst ·
    /// 9–10 primary, material, newly disclosed.
    /// SEC Form 4 rows are scored from the transaction itself (size,
    /// buy vs. sell, 10b5-1 plan or not) rather than by the model; a
    /// sale tops out at 6.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("relevance_score")]
    [Minimum(1)]
    [Maximum(10)]
    public int? RelevanceScore { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ai_trading_insights")]
    public AiTradingInsights? AiTradingInsights { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("news_context_enhancement")]
    public NewsContextEnhancement? NewsContextEnhancement { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
