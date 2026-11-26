using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.Budgets;

/// <summary>
/// The inputs of the UpsertBulkBudgetUsers operation.
/// </summary>
public sealed record UpsertBulkBudgetUsersRequest
{
    [MinLength(1)]
    public required string BudgetId { get; init; }

    public string? ApiToken { get; init; }

    public required BudgetMemberBulkUpsertRequestDto Body { get; init; }
}
