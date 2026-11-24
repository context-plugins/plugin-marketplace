using Curlec.Core.Validation.Attributes;

namespace Curlec.Requests.XTransactions;

/// <summary>
/// The inputs of the ListTransactions operation.
/// </summary>
public sealed record ListTransactionsRequest
{
    /// <summary>
    /// RazorpayX account number (Customer Identifier from Dashboard). Different for Test and Live mode.
    /// </summary>
    public required string AccountNumber { get; init; }

    /// <summary>
    /// Unix timestamp filter start
    /// </summary>
    public int? From { get; init; }

    /// <summary>
    /// Unix timestamp filter end
    /// </summary>
    public int? To { get; init; }

    /// <summary>
    /// Number of transactions to return. Default: 10. Maximum: 100.
    /// </summary>
    [Maximum(100)]
    public int Count { get; init; } = 10;

    /// <summary>
    /// Number of transactions to skip. Use for pagination. Default: 0.
    /// </summary>
    public int Skip { get; init; } = 0;
}
