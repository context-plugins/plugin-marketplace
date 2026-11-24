using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record GcpBillingAccount
{
    /// <summary>
    /// GCP Billing Account ID.
    /// </summary>
    [JsonPropertyName("billingAccountId")]
    public required string BillingAccountId { get; init; }

    /// <summary>
    /// Human-readable account name, if available. Defaults to the GCP Billing Account display name; may be overridden by a custom name set on the asset in the DoiT Console. Null when no name is available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// ISO 4217 currency code for this billing account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public string? Currency { get; init; }

    /// <summary>
    /// PerfectScale for Commitments onboarding status per product line (<c>compute</c>, <c>cloud_sql</c>), ordered <c>compute</c> first. A product line is omitted when it is not onboarded; the field is absent when no product line is onboarded.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("onboardingStatus")]
    public IReadOnlyList<GcpOnboardingStatusByService>? OnboardingStatus { get; init; }

    /// <summary>
    /// <c>true</c> if the BigQuery CUD export is healthy and up to date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cudExportHealthy")]
    public bool? CudExportHealthy { get; init; }

    /// <summary>
    /// Timestamp of the last successful CUD inventory sync. Null when a sync has not completed yet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("commitmentsSyncTime")]
    public DateTimeOffset? CommitmentsSyncTime { get; init; }

    /// <summary>
    /// Trailing 30-day aggregate metrics (<c>esr</c>, <c>savings</c>) per product line (<c>compute</c>, <c>cloud_sql</c>), ordered <c>compute</c> first. Absent when no product line has stats.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stats30d")]
    public IReadOnlyList<GcpStats30DByService>? Stats30D { get; init; }

    /// <summary>
    /// Year-to-date and lifetime savings per product line (<c>compute</c>, <c>cloud_sql</c>), ordered <c>compute</c> first; absent when no product line has totals. Same values as returned by <c>GET /ps4commitments/v1/gcp/billing-accounts/{billingAccountId}</c> for this billing account, so callers can sum totals across billing accounts without making an extra get-by-id call per billing account. Lifetime is bounded by each billing account's PerfectScale for Commitments onboarding start date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("savingsTotals")]
    public IReadOnlyList<GcpSavingsTotalsByService>? SavingsTotals { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
