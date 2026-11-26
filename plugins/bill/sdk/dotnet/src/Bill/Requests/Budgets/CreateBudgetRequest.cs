using Bill.Models;

namespace Bill.Requests.Budgets;

/// <summary>
/// The inputs of the CreateBudget operation.
/// </summary>
public sealed record CreateBudgetRequest
{
    public string? ApiToken { get; init; }

    public required BudgetCreateDto Body { get; init; }
}
