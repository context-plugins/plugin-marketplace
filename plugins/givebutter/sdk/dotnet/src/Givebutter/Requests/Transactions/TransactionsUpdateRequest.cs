using Givebutter.Models;

namespace Givebutter.Requests.Transactions;

/// <summary>
/// The inputs of the TransactionsUpdate operation.
/// </summary>
public sealed record TransactionsUpdateRequest
{
    /// <summary>
    /// The transaction tid
    /// </summary>
    public required string? Transaction { get; init; }

    public UpdateTransactionRequest? Body { get; init; }
}
