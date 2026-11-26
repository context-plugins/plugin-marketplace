using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

/// <summary>
/// Update a transaction
/// </summary>
public record UpdateTxRequestDto
{
    /// <summary>
    /// BILL-generated ID or UUID of the budget linked with the transaction
    /// </summary>
    [JsonPropertyName("budgetId")]
    public required string BudgetId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
