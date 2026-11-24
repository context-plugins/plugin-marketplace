using DoiT.Models;

namespace DoiT.Requests.Budgets;

/// <summary>
/// The inputs of the CreateBudget operation.
/// </summary>
public sealed record CreateBudgetRequest
{
    public BudgetCreateUpdateRequest? Body { get; init; }
}
