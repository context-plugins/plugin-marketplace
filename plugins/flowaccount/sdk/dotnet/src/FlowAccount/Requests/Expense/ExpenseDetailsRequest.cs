namespace FlowAccount.Requests.Expense;

/// <summary>
/// The inputs of the ExpenseDetails operation.
/// </summary>
public sealed record ExpenseDetailsRequest
{
    /// <summary>
    /// Sql DocumentId
    /// </summary>
    public required long Id { get; init; }

    public required string Culture { get; init; }
}
