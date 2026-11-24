using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record ExpenseRatioInsightRequest
{
    /// <summary>
    /// The expense value to calculate the ratio against income (ME040 Average Monthly Credit)
    /// </summary>
    [JsonPropertyName("expense")]
    public required string Expense { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
