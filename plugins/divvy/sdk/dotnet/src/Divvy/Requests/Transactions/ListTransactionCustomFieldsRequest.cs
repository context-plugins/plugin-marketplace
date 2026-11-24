using System.ComponentModel.DataAnnotations;

namespace Divvy.Requests.Transactions;

/// <summary>
/// The inputs of the ListTransactionCustomFields operation.
/// </summary>
public sealed record ListTransactionCustomFieldsRequest
{
    [MinLength(1)]
    public required string TransactionId { get; init; }

    public string? Filters { get; init; }

    public string? ApiToken { get; init; }
}
