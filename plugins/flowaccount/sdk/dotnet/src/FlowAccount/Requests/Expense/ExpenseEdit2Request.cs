using FlowAccount.Models;

namespace FlowAccount.Requests.Expense;

/// <summary>
/// The inputs of the ExpenseEdit2 operation.
/// </summary>
public sealed record ExpenseEdit2Request
{
    public required long Id { get; init; }

    public required string Culture { get; init; }

    public required InlineDocument Body { get; init; }
}
