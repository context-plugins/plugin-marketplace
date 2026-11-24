using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Links a budget suggestion to an existing budget.
/// </summary>
public record BudgetSuggestionAcceptRequest
{
    /// <summary>
    /// ID of the budget (created via POST /analytics/v1/budgets) to link this suggestion to.
    /// </summary>
    [JsonPropertyName("budgetId")]
    public required string BudgetId { get; init; }

    /// <summary>
    /// Whether the customer edited the suggested values before accepting.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("editedBeforeAccept")]
    public bool? EditedBeforeAccept { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
