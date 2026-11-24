using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using CompSniper.Core.Models;
using CompSniper.Core.Validation;
using CompSniper.Core.Validation.Attributes;
using CompSniper.Models.Enums;

namespace CompSniper.Models;

public record MaxJob
{
    [JsonPropertyName("jobId")]
    public required Guid JobId { get; init; }

    [JsonPropertyName("status")]
    public required StatusCompSniperMarketplaceAndShippingScrapeApi Status { get; init; }

    [JsonPropertyName("keyword")]
    public required string Keyword { get; init; }

    [JsonPropertyName("maxPages")]
    public required int MaxPages { get; init; }

    [JsonPropertyName("pagesDone")]
    public required int PagesDone { get; init; }

    [JsonPropertyName("itemsFound")]
    public required int ItemsFound { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalResults")]
    public string? TotalResults { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startedAt")]
    public DateTimeOffset? StartedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completedAt")]
    public DateTimeOffset? CompletedAt { get; init; }

    [JsonPropertyName("updatedAt")]
    public required DateTimeOffset UpdatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("progress")]
    public MaxProgress? Progress { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("terminationReason")]
    public TerminationReason? TerminationReason { get; init; }

    [JsonPropertyName("creditPreference")]
    public required CreditPreference CreditPreference { get; init; }

    /// <summary>
    /// Temporary carried-over requests remaining.
    /// </summary>
    [JsonPropertyName("rolloverBalance")]
    public required int RolloverBalance { get; init; }

    [JsonPropertyName("creditBalance")]
    public required int CreditBalance { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resultsUrl")]
    public string? ResultsUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public string? Error { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    public MaxSummary? Summary { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("delivery")]
    public Delivery2? Delivery { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("items")]
    public IReadOnlyList<SoldItem>? Items { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiresAt")]
    public DateTimeOffset? ExpiresAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("purchaseCreditsUrl")]
    [Format(FormatKind.Uri)]
    public string? PurchaseCreditsUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("upgradeUrl")]
    [Format(FormatKind.Uri)]
    public string? UpgradeUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
