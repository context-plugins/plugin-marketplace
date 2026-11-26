using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.Transactions;

/// <summary>
/// The inputs of the AddTransactionReceipt operation.
/// </summary>
public sealed record AddTransactionReceiptRequest
{
    [MinLength(1)]
    public required string TransactionId { get; init; }

    public string? ApiToken { get; init; }

    public required TransactionReceiptRequestDto Body { get; init; }
}
