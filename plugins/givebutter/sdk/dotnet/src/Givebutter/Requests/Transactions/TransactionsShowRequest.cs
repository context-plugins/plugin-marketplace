namespace Givebutter.Requests.Transactions;

/// <summary>
/// The inputs of the TransactionsShow operation.
/// </summary>
public sealed record TransactionsShowRequest
{
    /// <summary>
    /// The transaction tid
    /// </summary>
    public required string? Transaction { get; init; }
}
