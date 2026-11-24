using System;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record AwsOrganization
{
    /// <summary>
    /// 12-digit account number of the AWS organization's management (payer) account.
    /// </summary>
    [JsonPropertyName("managementAccountId")]
    public required string ManagementAccountId { get; init; }

    /// <summary>
    /// Human-readable account name, if available. Defaults to the AWS Organizations account name; may be overridden by a custom name set on the asset in the DoiT Console. Null when no name is available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("onboardingStatus")]
    public AwsOnboardingStatus? OnboardingStatus { get; init; }

    /// <summary>
    /// Timestamp of the last successful Savings Plan inventory sync. Null when a sync has not completed yet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("savingsPlansSyncTime")]
    public DateTimeOffset? SavingsPlansSyncTime { get; init; }

    /// <summary>
    /// Trailing 30-day aggregate metrics (<c>esr</c>, <c>savings</c>), broken down by SP type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stats30d")]
    public Stats30D1? Stats30D { get; init; }

    /// <summary>
    /// Year-to-date and lifetime savings per Savings Plan (SP) type. Same values as returned by <c>GET /ps4commitments/v1/aws/organizations/{managementAccountId}</c> for this organization, so callers can sum totals across AWS organizations without making an extra get-by-id call per organization. Lifetime is bounded by each AWS organization's PerfectScale for Commitments onboarding start date.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("savingsTotals")]
    public SavingsTotals1? SavingsTotals { get; init; }

    /// <summary>
    /// Estimated monthly additional savings per SP type for this AWS organization from the latest purchase projection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("monthlyPotentialSavings")]
    public AwsMonthlyPotentialSavings? MonthlyPotentialSavings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
