using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Class representing spent amounts for a budget period.
/// </summary>
public record BudgetPeriodSpentAmountsDto
{
    /// <summary>
    /// Sum of cleared transactions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cleared")]
    public double? Cleared { get; init; }

    /// <summary>
    /// Sum of pending transactions
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pending")]
    public double? Pending { get; init; }

    /// <summary>
    /// Sum of all transactions (<c>cleared + pending</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total")]
    public double? Total { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
