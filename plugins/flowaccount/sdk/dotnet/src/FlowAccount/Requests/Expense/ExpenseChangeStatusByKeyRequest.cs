namespace FlowAccount.Requests.Expense;

/// <summary>
/// The inputs of the ExpenseChangeStatusByKey operation.
/// </summary>
public sealed record ExpenseChangeStatusByKeyRequest
{
    public required long DocumentId { get; init; }

    public required string? StatusKey { get; init; }

    public required string Culture { get; init; }
}
