using System;
using System.Text.Json.Serialization;
using AgentReady.Core.Models;
using AgentReady.Core.Validation;
using AgentReady.Core.Validation.Attributes;
using AgentReady.Models.Enums;

namespace AgentReady.Models;

/// <summary>
/// Lightweight scan listing entry.
/// </summary>
public record ScanSummary
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("shareToken")]
    public required string ShareToken { get; init; }

    [JsonPropertyName("domain")]
    public required string Domain { get; init; }

    [JsonPropertyName("rootUrl")]
    [Format(FormatKind.Uri)]
    public required string RootUrl { get; init; }

    [JsonPropertyName("vercelScore")]
    public required int? VercelScore { get; init; }

    /// <summary>
    /// Coarse rating bucket derived from the Vercel Agent Readability score.
    /// </summary>
    [JsonPropertyName("vercelRating")]
    public required VercelRating? VercelRating { get; init; }

    [JsonPropertyName("llmstxtScore")]
    public required int? LlmstxtScore { get; init; }

    /// <summary>
    /// Accessibility sub-score (A-series WCAG checks). Null for scans run before the score was persisted.
    /// </summary>
    [JsonPropertyName("accessibilityScore")]
    public required int? AccessibilityScore { get; init; }

    [JsonPropertyName("percentile")]
    [Minimum(0)]
    [Maximum(100)]
    public required int? Percentile { get; init; }

    [JsonPropertyName("corpusTotal")]
    [Minimum(0)]
    public required int? CorpusTotal { get; init; }

    [JsonPropertyName("pagesScanned")]
    public required int? PagesScanned { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
