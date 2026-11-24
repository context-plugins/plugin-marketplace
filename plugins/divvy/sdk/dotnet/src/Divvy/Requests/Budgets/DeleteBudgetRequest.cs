using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.Budgets;

/// <summary>
/// The inputs of the DeleteBudget operation.
/// </summary>
public sealed record DeleteBudgetRequest
{
    [MinLength(1)]
    public required string BudgetId { get; init; }

    public string? ApiToken { get; init; }
}
