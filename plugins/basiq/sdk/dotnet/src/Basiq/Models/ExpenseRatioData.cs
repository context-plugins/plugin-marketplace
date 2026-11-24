using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Required when type is EXPENSE_RATIO_VERIFICATION.
/// </summary>
public record ExpenseRatioData
{
    /// <summary>
    /// The expense value (as a numeric string) to calculate the ratio against income (ME040 Average Monthly Credit). Must be a positive numeric string.
    /// </summary>
    [JsonPropertyName("expense")]
    public required string Expense { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
