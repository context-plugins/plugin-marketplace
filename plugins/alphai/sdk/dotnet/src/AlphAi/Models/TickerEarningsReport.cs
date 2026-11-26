using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Models;
using AlphAi.Models.Enums;

namespace AlphAi.Models;

/// <summary>
/// One published AlphAI earnings read in a ticker's history.
/// </summary>
public record TickerEarningsReport
{
    /// <summary>
    /// Article uid; the same read is served inline by /api/news/{uid}/.
    /// </summary>
    [JsonPropertyName("uid")]
    public required string Uid { get; init; }

    [JsonPropertyName("time_published")]
    public required DateTimeOffset TimePublished { get; init; }

    /// <summary>
    /// The filing's own title.
    /// </summary>
    [JsonPropertyName("title")]
    public required string Title { get; init; }

    /// <summary>
    /// <c>sec_form8k</c> for a US filer's item 2.02, <c>sec_form6k</c> for a foreign private issuer's earnings release.
    /// </summary>
    [JsonPropertyName("source_type")]
    public required SourceTypeAlphAiRestSymbolsApi SourceType { get; init; }

    /// <summary>
    /// The share class the filing was actually made under, which is not always the one requested — SEC-sourced rows tag one class per issuer, so a GOOGL request carries reads filed under GOOG.
    /// </summary>
    [JsonPropertyName("ticker")]
    public required string Ticker { get; init; }

    [JsonPropertyName("fiscal_period")]
    public required string FiscalPeriod { get; init; }

    /// <summary>
    /// AlphAI's own structured analysis of an earnings release (SEC Form 8-K item 2.02, or Form 6-K for a foreign private issuer — half-year and full-year periods, IFRS and non-USD figures copied as reported). Every figure was cross-checked against the filing text before storage; consensus estimates and price targets are omitted because they are not in the filing. MCP <c>alphai_article</c> returns the structured read; connector <c>fetch</c> includes its metrics, comparisons, segments, guidance and limitations in the citation-ready <c>text</c> when a completed read exists.
    /// </summary>
    [JsonPropertyName("analysis")]
    public required EarningsReport Analysis { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
