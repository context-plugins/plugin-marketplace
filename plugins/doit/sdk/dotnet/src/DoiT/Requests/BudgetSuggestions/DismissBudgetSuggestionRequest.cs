using DoiT.Models;

namespace DoiT.Requests.BudgetSuggestions;

/// <summary>
/// The inputs of the DismissBudgetSuggestion operation.
/// </summary>
public sealed record DismissBudgetSuggestionRequest
{
    /// <summary>
    /// Budget suggestion ID.
    /// </summary>
    public required string Id { get; init; }

    public BudgetSuggestionDismissRequest? Body { get; init; }
}
