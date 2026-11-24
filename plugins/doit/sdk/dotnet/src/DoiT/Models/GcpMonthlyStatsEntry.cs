using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// One calendar-month aggregate for the billing account. Money fields are wrapped objects (<c>{amount, currency}</c>).
/// </summary>
public record GcpMonthlyStatsEntry
{
    /// <summary>
    /// Calendar month in <c>YYYY-MM</c> form (UTC).
    /// </summary>
    [JsonPropertyName("month")]
    [RegularExpression("^\\d{4}-(0[1-9]|1[0-2])$")]
    public required string Month { get; init; }

    /// <summary>
    /// Effective Savings Rate (ESR) for the month, as a fraction from 0 to 1. Measures what share of eligible spend is saved through active commitments compared with equivalent on-demand cost.
    /// </summary>
    [JsonPropertyName("esr")]
    public required double Esr { get; init; }

    /// <summary>
    /// Eligible on-demand cost for the month. On-demand cost is eligible cloud spend priced at full on-demand rates, that is, not discounted by a commitment.
    /// </summary>
    [JsonPropertyName("onDemandCost")]
    public required Money OnDemandCost { get; init; }

    /// <summary>
    /// Actual cost after commitments for the month.
    /// </summary>
    [JsonPropertyName("costWithSavings")]
    public required Money CostWithSavings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
