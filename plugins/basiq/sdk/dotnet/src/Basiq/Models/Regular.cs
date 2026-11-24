using System.Collections.Generic;
using System.Text.Json.Serialization;
using Basiq.Core.Models;
using Basiq.Models.Enums;

namespace Basiq.Models;

/// <summary>
/// RegularSource
/// Our complex income algorithm uses over 50 rules to identify different types of income sources. For example, to identify a regular income source - the fortnightly salary should have a minimum of 5 credits across a 90 day time period with regular intervals. Additionally, tolerances are applied based on confidence in identified income source patterns (by amount and frequency).
/// </summary>
public record Regular
{
    /// <summary>
    /// Source regular income (cleaned transaction description).
    /// </summary>
    [JsonPropertyName("source")]
    public required string Source { get; init; }

    /// <summary>
    /// Duration regular income (number days from first to last occurrence) returned as an integer with values zero or greater
    /// </summary>
    [JsonPropertyName("ageDays")]
    public required long AgeDays { get; init; }

    /// <summary>
    /// Each amount classified as income (repeated for each income credit and ordered by most recent)
    /// </summary>
    [JsonPropertyName("changeHistory")]
    public required IReadOnlyList<ChangeHistoryAffordabilityIncomeApi> ChangeHistory { get; init; }

    [JsonPropertyName("current")]
    public required Current Current { get; init; }

    /// <summary>
    /// Enum detailing frequency regular income
    /// </summary>
    [JsonPropertyName("frequency")]
    public required Frequency Frequency { get; init; }

    [JsonPropertyName("irregularity")]
    public required Irregularity Irregularity { get; init; }

    [JsonPropertyName("previous3Months")]
    public required Previous3Months Previous3Months { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
