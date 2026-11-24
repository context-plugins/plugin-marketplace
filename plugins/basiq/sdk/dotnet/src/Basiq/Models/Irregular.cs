using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// IrregularSource
/// Income sources typically require at least 5 credits across a minimum 90 day time period
/// </summary>
public record Irregular
{
    /// <summary>
    /// Duration irregular income (number days from first to last occurrence) returned as an integer with values zero or greater.
    /// </summary>
    [JsonPropertyName("ageDays")]
    public required long AgeDays { get; init; }

    /// <summary>
    /// Mean of irregular income amount - calculated across all occurrences identified.
    /// </summary>
    [JsonPropertyName("amountAvg")]
    public required string AmountAvg { get; init; }

    /// <summary>
    /// Average (mean) number of times per calendar month the credits in the series occur.
    /// </summary>
    [JsonPropertyName("avgMonthlyOccurence")]
    public required string AvgMonthlyOccurence { get; init; }

    /// <summary>
    /// Each amount classified as income (repeated for each income credit and ordered by most recent)
    /// </summary>
    [JsonPropertyName("changeHistory")]
    public required IReadOnlyList<ChangeHistoryAffordabilityIncomeApi> ChangeHistory { get; init; }

    [JsonPropertyName("current")]
    public required Current1 Current { get; init; }

    /// <summary>
    /// Frequency is "irregular"
    /// </summary>
    [JsonPropertyName("frequency")]
    public required string Frequency { get; init; }

    /// <summary>
    /// Number of instances of credits in the series.
    /// </summary>
    [JsonPropertyName("noOccurrences")]
    public required long NoOccurrences { get; init; }

    /// <summary>
    /// Source irregular income (cleaned transaction description).
    /// </summary>
    [JsonPropertyName("source")]
    public required string Source { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
