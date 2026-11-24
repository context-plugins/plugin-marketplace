using FlowAccount.Models;

namespace FlowAccount.Requests.Expense;

/// <summary>
/// The inputs of the ExpenseCreate operation.
/// </summary>
public sealed record ExpenseCreateRequest
{
    public required string Culture { get; init; }

    public required SimpleDocument Body { get; init; }
}
