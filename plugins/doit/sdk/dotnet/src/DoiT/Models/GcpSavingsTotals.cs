using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Running savings figures derived server-side from the full monthly stats history, as the sum of <c>onDemandCost - costWithSavings</c> per month. <c>lifetime</c> starts at PerfectScale for Commitments onboarding; <c>ytd</c> starts at the later of January 1 of the current year and onboarding. Months before the bound are excluded; the bound month and the current month are prorated.
/// </summary>
public record GcpSavingsTotals
{
    /// <summary>
    /// Year-to-date realized savings.
    /// </summary>
    [JsonPropertyName("ytd")]
    public required Money Ytd { get; init; }

    /// <summary>
    /// Lifetime realized savings since onboarding.
    /// </summary>
    [JsonPropertyName("lifetime")]
    public required Money Lifetime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
