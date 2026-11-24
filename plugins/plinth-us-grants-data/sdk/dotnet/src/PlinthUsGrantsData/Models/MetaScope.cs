using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Models;

/// <summary>
/// Headline counts for the slice currently being served — the live figure any copy should track.
/// <para>
/// ⚠️ THE TWO YEAR ENDS ARE DIFFERENT NUMBERS AND BOTH ARE PUBLISHED. <c>last_fiscal_year</c> is
/// max(tax_year) — sync a mirrored copy against it. <c>last_complete_fiscal_year</c> is the newest year
/// that has stopped filling, and it is the one prose should quote: the IRS lag means the corpus
/// always carries a few hundred early filings for a barely-started year, so max(tax_year) reads a
/// year or two ahead of the coverage anyone would recognise. Publishing only the first is what put
/// /meta at FY2026 while every page on the site said FY2025 (2026-08 audit).
/// </para>
/// </summary>
public record MetaScope
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("grants")]
    public Grants? Grants { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total_amount")]
    public TotalAmount? TotalAmount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("funders")]
    public Funders? Funders { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("first_fiscal_year")]
    public FirstFiscalYear? FirstFiscalYear { get; init; }

    /// <summary>
    /// Newest fiscal year any row falls in — max(tax_year), including years still arriving. Sync against this; do not quote it as the coverage span.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_fiscal_year")]
    public LastFiscalYear? LastFiscalYear { get; init; }

    /// <summary>
    /// Newest fiscal year that has finished arriving — the span to quote. Null on a slice too thin to measure, never guessed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_complete_fiscal_year")]
    public LastCompleteFiscalYear? LastCompleteFiscalYear { get; init; }

    /// <summary>
    /// Fiscal years still filling. Measured the same way /data-quality measures it: a trailing year holding less than 90% of the year before it has not finished arriving. The newest year is always here.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("partial_fiscal_years")]
    public PartialFiscalYears? PartialFiscalYears { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
