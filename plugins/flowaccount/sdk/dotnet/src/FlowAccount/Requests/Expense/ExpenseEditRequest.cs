using FlowAccount.Models;

namespace FlowAccount.Requests.Expense;

/// <summary>
/// The inputs of the ExpenseEdit operation.
/// </summary>
public sealed record ExpenseEditRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required SimpleDocument Body { get; init; }
}
