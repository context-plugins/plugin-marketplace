using Bill.Core.Validation.Attributes;

namespace Bill.Requests.Transactions;

/// <summary>
/// The inputs of the ListTransactions operation.
/// </summary>
public sealed record ListTransactionsRequest
{
    [Minimum(1)]
    [Maximum(50)]
    public long? Max { get; init; }

    public string? NextPage { get; init; }

    public string? PrevPage { get; init; }

    public string? Sort { get; init; }

    public string? Filters { get; init; }

    public string? ShowCustomFieldIds { get; init; }

    public bool? IncludeReceipts { get; init; }

    public string? ApiToken { get; init; }
}
