using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

/// <summary>
/// Category data
/// </summary>
public record CategoryAffordabilityExpensesApi
{
    /// <summary>
    /// Class represents one class of classification system
    /// </summary>
    [JsonPropertyName("expenseClass")]
    public required ExpenseClass ExpenseClass { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
