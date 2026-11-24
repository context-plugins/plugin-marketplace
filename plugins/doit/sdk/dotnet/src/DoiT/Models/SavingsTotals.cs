using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Year-to-date and lifetime savings, grouped by SP type. Lifetime is bounded by the parent AWS organization's PerfectScale for Commitments onboarding start.
/// </summary>
public record SavingsTotals
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
