using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.Budgets;

/// <summary>
/// The inputs of the UpdateBudget operation.
/// </summary>
public sealed record UpdateBudgetRequest
{
    [MinLength(1)]
    public required string BudgetId { get; init; }

    public string? ApiToken { get; init; }

    public required BudgetUpdateDto Body { get; init; }
}
