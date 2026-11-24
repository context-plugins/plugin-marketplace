using DoiT.Models;

namespace DoiT.Requests.Budgets;

/// <summary>
/// The inputs of the UpdateBudget operation.
/// </summary>
public sealed record UpdateBudgetRequest
{
    public required string Id { get; init; }

    public BudgetCreateUpdateRequest? Body { get; init; }
}
