using Givebutter.Models;

namespace Givebutter.Requests.Transactions;

/// <summary>
/// The inputs of the TransactionsStore operation.
/// </summary>
public sealed record TransactionsStoreRequest
{
    public required StoreTransactionRequest Body { get; init; }
}
