using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Budgets;

/// <summary>
/// The inputs of the GetBudgetMember operation.
/// </summary>
public sealed record GetBudgetMemberRequest
{
    [MinLength(1)]
    public required string BudgetId { get; init; }

    [MinLength(1)]
    public required string UserId { get; init; }

    public string? ApiToken { get; init; }
}
