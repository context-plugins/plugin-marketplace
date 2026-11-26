using System.ComponentModel.DataAnnotations;
using Bill.Models;

namespace Bill.Requests.Transactions;

/// <summary>
/// The inputs of the UpdateTransactionCustomFields operation.
/// </summary>
public sealed record UpdateTransactionCustomFieldsRequest
{
    [MinLength(1)]
    public required string TransactionId { get; init; }

    public string? ApiToken { get; init; }

    public required BulkUpdateTxCustomFieldRequestDto Body { get; init; }
}
