using System.ComponentModel.DataAnnotations;

namespace Bill.Requests.Transactions;

/// <summary>
/// The inputs of the DeleteTransactionReceipt operation.
/// </summary>
public sealed record DeleteTransactionReceiptRequest
{
    [MinLength(1)]
    public required string TransactionId { get; init; }

    [MinLength(1)]
    public required string ReceiptId { get; init; }

    public string? ApiToken { get; init; }
}
