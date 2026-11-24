using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

public record CreditBalance
{
    [JsonPropertyName("creditsCurrencyId")]
    public required string CreditsCurrencyId { get; init; }

    [JsonPropertyName("currencyName")]
    public required string CurrencyName { get; init; }

    [JsonPropertyName("currencyKey")]
    public required string CurrencyKey { get; init; }

    /// <summary>
    /// Effective spendable balance across all grants in this pool, rollover-capped during rollover windows. Equals sum(grants[].available).
    /// </summary>
    [JsonPropertyName("available")]
    public required double Available { get; init; }

    [JsonPropertyName("used")]
    public required double Used { get; init; }

    [JsonPropertyName("total")]
    public required double Total { get; init; }

    /// <summary>
    /// Aggregate min(periodStart) across grants in this pool. Does not correspond to any real billing period when grants overlap. Use grants[].periodStart instead. Will be removed in a future API version.
    /// </summary>
    [JsonPropertyName("periodStart")]
    public required DateTimeOffset? PeriodStart { get; init; }

    /// <summary>
    /// Aggregate max(periodEnd) across grants in this pool. Does not correspond to any real billing period when grants overlap. Use grants[].periodEnd or grants[].expiresAt instead. Will be removed in a future API version.
    /// </summary>
    [JsonPropertyName("periodEnd")]
    public required DateTimeOffset? PeriodEnd { get; init; }

    /// <summary>
    /// Aggregate max(rolloverEndDate) across grants in this pool. Use grants[].rolloverEndDate or grants[].expiresAt instead. Will be removed in a future API version.
    /// </summary>
    [JsonPropertyName("rolloverEndDate")]
    public required DateTimeOffset? RolloverEndDate { get; init; }

    [JsonPropertyName("recipient")]
    public required CreditBalanceRecipient Recipient { get; init; }

    [JsonPropertyName("grants")]
    public required IReadOnlyList<CreditGrant> Grants { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
