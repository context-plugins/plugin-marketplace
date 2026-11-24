using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record ChangeHistoryAffordabilityIncomeApi
{
    /// <summary>
    /// Amount of income for that period
    /// </summary>
    [JsonPropertyName("amount")]
    public required string Amount { get; init; }

    /// <summary>
    /// Date income received
    /// </summary>
    [JsonPropertyName("date")]
    public required string Date { get; init; }

    /// <summary>
    /// Source income (cleaned transaction description)
    /// </summary>
    [JsonPropertyName("source")]
    public required string Source { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
