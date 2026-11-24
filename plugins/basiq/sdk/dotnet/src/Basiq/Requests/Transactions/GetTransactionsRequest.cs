namespace Basiq.Requests.Transactions;

/// <summary>
/// The inputs of the GetTransactions operation.
/// </summary>
public sealed record GetTransactionsRequest
{
    /// <summary>
    /// User identifier.
    /// </summary>
    public required string UserId { get; init; }

    /// <summary>
    /// This represents the maximum number of items that may be included in the response (maximum of 500). Note that by default 500 items are returned if this value is not specified.
    /// </summary>
    public long Limit { get; init; } = 500L;

    /// <summary>
    /// Transaction filters; connection.id, account.id, transaction.postDate, transaction.status, institution.id, transaction.direction, transaction.class
    /// </summary>
    public string? Filter { get; init; }
}
