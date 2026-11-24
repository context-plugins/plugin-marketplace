using FlowAccount.Models;

namespace FlowAccount.Requests.Expense;

/// <summary>
/// The inputs of the ExpenseCreate2 operation.
/// </summary>
public sealed record ExpenseCreate2Request
{
    public required string Culture { get; init; }

    public required InlineDocument Body { get; init; }
}
