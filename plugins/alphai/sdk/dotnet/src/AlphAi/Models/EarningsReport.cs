using System.Collections.Generic;
using System.Text.Json.Serialization;
using AlphAi.Core.Models;
using AlphAi.Models.Enums;

namespace AlphAi.Models;

/// <summary>
/// AlphAI's own structured analysis of an earnings release (SEC Form 8-K item 2.02, or Form 6-K for a foreign private issuer — half-year and full-year periods, IFRS and non-USD figures copied as reported). Every figure was cross-checked against the filing text before storage; consensus estimates and price targets are omitted because they are not in the filing. MCP <c>alphai_article</c> returns the structured read; connector <c>fetch</c> includes its metrics, comparisons, segments, guidance and limitations in the citation-ready <c>text</c> when a completed read exists.
/// </summary>
public record EarningsReport
{
    [JsonPropertyName("company")]
    public required string Company { get; init; }

    [JsonPropertyName("ticker")]
    public required string Ticker { get; init; }

    [JsonPropertyName("fiscal_period")]
    public required string FiscalPeriod { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("period_end")]
    public string? PeriodEnd { get; init; }

    [JsonPropertyName("headline")]
    public required string Headline { get; init; }

    [JsonPropertyName("verdict")]
    public required Verdict Verdict { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verdict_reason")]
    public string? VerdictReason { get; init; }

    [JsonPropertyName("key_metrics")]
    public required IReadOnlyList<KeyMetric> KeyMetrics { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("segments")]
    public IReadOnlyList<Segment>? Segments { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("guidance")]
    public Guidance? Guidance { get; init; }

    /// <summary>
    /// Reported figure vs the company's own prior outlook, when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vs_prior_guidance")]
    public IReadOnlyList<VsPriorGuidance>? VsPriorGuidance { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("capital_returns")]
    public IReadOnlyList<string>? CapitalReturns { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("balance_sheet_cash_flow")]
    public IReadOnlyList<string>? BalanceSheetCashFlow { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("drivers")]
    public IReadOnlyList<string>? Drivers { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("concerns")]
    public IReadOnlyList<string>? Concerns { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("what_to_watch")]
    public IReadOnlyList<string>? WhatToWatch { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quotes")]
    public IReadOnlyList<Quote>? Quotes { get; init; }

    /// <summary>
    /// Several paragraphs of grounded analysis.
    /// </summary>
    [JsonPropertyName("analysis")]
    public required string Analysis { get; init; }

    /// <summary>
    /// What the filing did NOT state, named rather than guessed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("missing_items")]
    public IReadOnlyList<string>? MissingItems { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("numbers_verified_from_document")]
    public bool? NumbersVerifiedFromDocument { get; init; }

    /// <summary>
    /// The unit the filing's own table headers name (<c>(In millions, except per share data)</c>). The prose and list fields (<c>analysis</c>, <c>balance_sheet_cash_flow</c>, <c>capital_returns</c>, <c>concerns</c>, …) quote table figures as printed, so in a read with <c>table_scale: millions</c> a bare <c>$36,197</c> there is $36,197 million; per-share figures are always as printed. Null when the headers name no unit or name two without a clear majority. Added 2026-10-01 to every stored read.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("table_scale")]
    public TableScale? TableScale { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
