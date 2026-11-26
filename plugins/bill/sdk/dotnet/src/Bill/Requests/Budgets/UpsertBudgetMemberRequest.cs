using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.Budgets;

/// <summary>
/// The inputs of the UpsertBudgetMember operation.
/// </summary>
public sealed record UpsertBudgetMemberRequest
{
    [MinLength(1)]
    public required string BudgetId { get; init; }

    [MinLength(1)]
    public required string UserId { get; init; }

    public string? ApiToken { get; init; }

    public required BudgetMemberUpsertRequestDto Body { get; init; }
}
