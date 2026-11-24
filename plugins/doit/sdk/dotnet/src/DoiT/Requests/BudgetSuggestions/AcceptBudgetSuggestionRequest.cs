using DoiT.Models;

namespace DoiT.Requests.BudgetSuggestions;

/// <summary>
/// The inputs of the AcceptBudgetSuggestion operation.
/// </summary>
public sealed record AcceptBudgetSuggestionRequest
{
    /// <summary>
    /// Budget suggestion ID.
    /// </summary>
    public required string Id { get; init; }

    public required BudgetSuggestionAcceptRequest Body { get; init; }
}
