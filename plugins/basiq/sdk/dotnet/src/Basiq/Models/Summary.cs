using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Summary totals relating to income analysis
/// </summary>
public record Summary
{
    /// <summary>
    /// Total mean of irregular income monthly calculated across the whole time period for all irregular sources
    /// </summary>
    [JsonPropertyName("irregularIncomeAvg")]
    public required string? IrregularIncomeAvg { get; init; }

    /// <summary>
    /// Total median regular income monthly calculated over the past 3 months for all regular sources
    /// </summary>
    [JsonPropertyName("regularIncomeAvg")]
    public required string? RegularIncomeAvg { get; init; }

    /// <summary>
    /// Total regular income so far this financial year (year to date)
    /// </summary>
    [JsonPropertyName("regularIncomeYTD")]
    public required string? RegularIncomeYtd { get; init; }

    /// <summary>
    /// Coming soon: total predicted regular income for this financial year
    /// </summary>
    [JsonPropertyName("regularIncomeYear")]
    public required string? RegularIncomeYear { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
