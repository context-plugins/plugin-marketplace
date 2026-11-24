using System.ComponentModel.DataAnnotations;
using Divvy.Models;

namespace Divvy.Requests.Transactions;

/// <summary>
/// The inputs of the UpdateTransaction operation.
/// </summary>
public sealed record UpdateTransactionRequest
{
    [MinLength(1)]
    public required string TransactionId { get; init; }

    public string? ApiToken { get; init; }

    public required UpdateTxRequestDto Body { get; init; }
}
