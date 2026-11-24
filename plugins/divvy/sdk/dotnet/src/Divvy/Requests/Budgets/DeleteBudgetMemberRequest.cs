using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.Budgets;

/// <summary>
/// The inputs of the DeleteBudgetMember operation.
/// </summary>
public sealed record DeleteBudgetMemberRequest
{
    [MinLength(1)]
    public required string BudgetId { get; init; }

    [MinLength(1)]
    public required string UserId { get; init; }

    public string? ApiToken { get; init; }
}
