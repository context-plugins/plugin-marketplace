using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Payments Summary
/// </summary>
public record Payment
{
    /// <summary>
    /// Average monthly amount by category for defined period (up to 13 months). This number monthly is calculated as follows: (Total Expenses/Report Coverage Days)*30. This allows data with partial months to be calculated correctly.
    /// </summary>
    [JsonPropertyName("avgMonthly")]
    public required string AvgMonthly { get; init; }

    /// <summary>
    /// Top level summary: category name. e.g. Medical care and heath expenses, Food and non-alcoholic beverages, Education
    /// </summary>
    [JsonPropertyName("division")]
    public required string Division { get; init; }

    /// <summary>
    /// Average monthly amount expressed as a percentage of total expenses.
    /// </summary>
    [JsonPropertyName("percentageTotal")]
    public required double PercentageTotal { get; init; }

    [JsonPropertyName("subCategory")]
    public required IReadOnlyList<SubCategory> SubCategory { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
