using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

/// <summary>
/// Other Credit Series are series where a pattern of credit is detected but the pattern does not meet the requirements for regular or irregular income, or the income series is too old e.g. former regular income or a potential future income
/// </summary>
public record OtherCredit
{
    /// <summary>
    /// Duration other income (number days from first to last occurrence) returned as an integer with values zero or greater.
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
    public required Current2 Current { get; init; }

    /// <summary>
    /// Frequency is "other", "irregular" or a time period e.g. "bi-weekly"
    /// </summary>
    [JsonPropertyName("frequency")]
    public required Frequency1 Frequency { get; init; }

    /// <summary>
    /// Number of instances of credits in the series.
    /// </summary>
    [JsonPropertyName("noOccurrences")]
    public required long NoOccurrences { get; init; }

    /// <summary>
    /// Source Other Credit income (cleaned transaction description).
    /// </summary>
    [JsonPropertyName("source")]
    public required string Source { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
