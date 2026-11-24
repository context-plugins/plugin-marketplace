using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Year-to-date and lifetime savings per Savings Plan (SP) type. Same values as returned by <c>GET /ps4commitments/v1/aws/organizations/{managementAccountId}</c> for this organization, so callers can sum totals across AWS organizations without making an extra get-by-id call per organization. Lifetime is bounded by each AWS organization's PerfectScale for Commitments onboarding start date.
/// </summary>
public record SavingsTotals1
{
    /// <summary>
    /// Running savings figures derived server-side from the full monthly stats history, as the sum of <c>onDemandCost - costWithSavings</c> per month. <c>lifetime</c> starts at PerfectScale for Commitments onboarding; <c>ytd</c> starts at the later of January 1 of the current year and onboarding. Months before the bound are excluded; the bound month and the current month are prorated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("compute")]
    public AwsSavingsTotals? Compute { get; init; }

    /// <summary>
    /// Running savings figures derived server-side from the full monthly stats history, as the sum of <c>onDemandCost - costWithSavings</c> per month. <c>lifetime</c> starts at PerfectScale for Commitments onboarding; <c>ytd</c> starts at the later of January 1 of the current year and onboarding. Months before the bound are excluded; the bound month and the current month are prorated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("database")]
    public AwsSavingsTotals? Database { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
