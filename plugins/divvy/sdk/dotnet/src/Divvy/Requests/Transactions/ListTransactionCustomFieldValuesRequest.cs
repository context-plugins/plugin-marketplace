using System.ComponentModel.DataAnnotations;
using Divvy.Core.Validation.Attributes;

namespace Divvy.Requests.Transactions;

/// <summary>
/// The inputs of the ListTransactionCustomFieldValues operation.
/// </summary>
public sealed record ListTransactionCustomFieldValuesRequest
{
    [MinLength(1)]
    public required string TransactionId { get; init; }

    [MinLength(1)]
    public required string CustomFieldId { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public long? Max { get; init; }

    public string? NextPage { get; init; }

    public string? PrevPage { get; init; }

    public string? ApiToken { get; init; }
}
