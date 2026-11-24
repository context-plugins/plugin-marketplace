using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AgentReady.Core.Models;
using AgentReady.Core.Validation;
using AgentReady.Core.Validation.Attributes;
using AgentReady.Models.Enums;

namespace AgentReady.Models;

/// <summary>
/// Full scan result. Same shape returned for sync, async, and cached reads.
/// </summary>
public record Scan
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("rootUrl")]
    [Format(FormatKind.Uri)]
    public required string RootUrl { get; init; }

    /// <summary>
    /// Lifecycle state of a scan. Poll until status is 'completed' or 'failed'.
    /// </summary>
    [JsonPropertyName("status")]
    public required StatusAgentReadyScansApi Status { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonPropertyName("completedAt")]
    public required DateTimeOffset? CompletedAt { get; init; }

    [JsonPropertyName("pagesDiscovered")]
    [Minimum(0)]
    public required int PagesDiscovered { get; init; }

    [JsonPropertyName("pagesScanned")]
    [Minimum(0)]
    public required int PagesScanned { get; init; }

    [JsonPropertyName("vercelScore")]
    [Minimum(0)]
    [Maximum(100)]
    public required int VercelScore { get; init; }

    /// <summary>
    /// Coarse rating bucket derived from the Vercel Agent Readability score.
    /// </summary>
    [JsonPropertyName("vercelRating")]
    public required VercelRating VercelRating { get; init; }

    [JsonPropertyName("llmstxtScore")]
    [Minimum(0)]
    [Maximum(100)]
    public required int LlmstxtScore { get; init; }

    /// <summary>
    /// Accessibility / layout-stability sub-score over the homepage WCAG checks (A-series). Null when no accessibility checks ran. Separate from the Vercel score — accessibility is WCAG, not the Vercel Agent Readability Spec.
    /// </summary>
    [JsonPropertyName("accessibilityScore")]
    [Minimum(0)]
    [Maximum(100)]
    public required int? AccessibilityScore { get; init; }

    /// <summary>
    /// Corpus percentile: share of scanned sites this score beats. Null when the corpus is too small to quote.
    /// </summary>
    [JsonPropertyName("percentile")]
    [Minimum(0)]
    [Maximum(100)]
    public required int? Percentile { get; init; }

    /// <summary>
    /// Number of sites the percentile is measured against. Null with percentile.
    /// </summary>
    [JsonPropertyName("corpusTotal")]
    [Minimum(0)]
    public required int? CorpusTotal { get; init; }

    [JsonPropertyName("siteChecks")]
    public required IReadOnlyList<CheckResultAgentReadyScansApi> SiteChecks { get; init; }

    [JsonPropertyName("llmstxtChecks")]
    public required IReadOnlyList<CheckResultAgentReadyScansApi> LlmstxtChecks { get; init; }

    [JsonPropertyName("pageResults")]
    public required IReadOnlyList<PageResult> PageResults { get; init; }

    /// <summary>
    /// Agent-protocol discovery checks (C-series) plus the accessibility checks (A-series). Populated only for surfaces the site exposes; A-checks run whenever the homepage was fetched. Neither family contributes to the Vercel score.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("protocolResults")]
    public IReadOnlyList<CheckResultAgentReadyScansApi>? ProtocolResults { get; init; }

    [JsonPropertyName("shareToken")]
    public required string ShareToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
