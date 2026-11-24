using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.Transactions;

/// <summary>
/// The inputs of the GetTransaction operation.
/// </summary>
public sealed record GetTransactionRequest
{
    [MinLength(1)]
    public required string TransactionId { get; init; }

    public string? ShowCustomFieldIds { get; init; }

    public string? ApiToken { get; init; }
}
