using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Models;

/// <summary>
/// What this deployment holds and how to reach it. Needs no key — start here.
/// </summary>
public record MetaResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code")]
    public int? Code { get; init; } = 200;

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("x_plinth")]
    public XPlinth1? XPlinth { get; init; }

    /// <summary>
    /// Provenance of the slice that answered. <c>version</c> is the sync signal — poll it, re-pull when it moves.
    /// </summary>
    [JsonPropertyName("dataset")]
    public required DatasetStamp Dataset { get; init; }

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
    [JsonPropertyName("scope")]
    public required MetaScope Scope { get; init; }

    /// <summary>
    /// How to get a key with no account, and what it may read.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trial")]
    public Trial? Trial { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("compliance_sources")]
    public ComplianceSources? ComplianceSources { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("candid_compatibility")]
    public CandidCompatibility? CandidCompatibility { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
