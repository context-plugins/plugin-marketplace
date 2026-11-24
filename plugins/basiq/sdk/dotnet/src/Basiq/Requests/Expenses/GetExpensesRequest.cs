namespace Basiq.Requests.Expenses;

/// <summary>
/// The inputs of the GetExpenses operation.
/// </summary>
public sealed record GetExpensesRequest
{
    /// <summary>
    /// The identifier of the user.
    /// </summary>
    public required string UserId { get; init; }

    /// <summary>
    /// The identifier of the expense summary to be retrieved.
    /// </summary>
    public required string SnapshotId { get; init; }
}
