using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Single member AWS account detail. Adds the trailing-window stats that drive the per-member-account view on the DoiT Console overview screen on top of the list-item shape:
/// - <c>monthlyStats</c>: last 6 calendar months per SP type.
/// - <c>dailyCoverage</c>: last 30 days per SP type.
/// - <c>savingsTotals</c>: year-to-date and lifetime savings per SP type, bounded by the parent AWS organization's PerfectScale for Commitments onboarding start.
/// <para>
/// <c>monthlyPotentialSavings</c> (estimated monthly additional savings per SP type) is inherited from the list-item shape (<c>AwsMemberAccount</c>).
/// </para>
/// </summary>
public record AwsMemberAccountDetail
{
    /// <summary>
    /// 12-digit AWS member account ID.
    /// </summary>
    [JsonPropertyName("memberAccountId")]
    public required string MemberAccountId { get; init; }

    /// <summary>
    /// 12-digit AWS management (payer) account ID of the parent AWS Organization.
    /// </summary>
    [JsonPropertyName("managementAccountId")]
    public required string ManagementAccountId { get; init; }

    /// <summary>
    /// Human-readable account name, if available. Defaults to the AWS Organizations account name; may be overridden by a custom name set on the asset in the DoiT Console. Null when no name is available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Trailing 30-day aggregate metrics per SP type (<c>compute</c>, <c>database</c>).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stats30d")]
    public Stats30D? Stats30D { get; init; }

    /// <summary>
    /// Estimated monthly additional savings per SP type for this member account, attributed from the parent AWS organization's projection by share of trailing-60-day Savings Plan-eligible on-demand cost.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("monthlyPotentialSavings")]
    public AwsMonthlyPotentialSavings? MonthlyPotentialSavings { get; init; }

    /// <summary>
    /// Trailing 6 calendar months of stats, grouped by SP type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("monthlyStats")]
    public MonthlyStats? MonthlyStats { get; init; }

    /// <summary>
    /// Trailing 30 days of commitment coverage, grouped by SP type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dailyCoverage")]
    public DailyCoverage? DailyCoverage { get; init; }

    /// <summary>
    /// Year-to-date and lifetime savings, grouped by SP type. Lifetime is bounded by the parent AWS organization's PerfectScale for Commitments onboarding start.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("savingsTotals")]
    public SavingsTotals? SavingsTotals { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
