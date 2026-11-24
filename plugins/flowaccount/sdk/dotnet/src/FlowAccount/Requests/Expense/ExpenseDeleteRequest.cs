namespace FlowAccount.Requests.Expense;

/// <summary>
/// The inputs of the ExpenseDelete operation.
/// </summary>
public sealed record ExpenseDeleteRequest
{
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
