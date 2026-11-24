using Curlec.Core.Validation.Attributes;
using Curlec.Models.Enums;

namespace Curlec.Requests.Invoices;

/// <summary>
/// The inputs of the ListInvoices operation.
/// </summary>
public sealed record ListInvoicesRequest
{
    /// <summary>
    /// Filter by invoice type.
    /// </summary>
    public Type3? Type { get; init; }

    /// <summary>
    /// Filter invoices by the payment ID used to pay them.
    /// </summary>
    public string? PaymentId { get; init; }

    /// <summary>
    /// Filter by customer ID (cust_*).
    /// </summary>
    public string? CustomerId { get; init; }

    /// <summary>
    /// Fetch all invoices generated for a subscription (sub_*).
    /// </summary>
    public string? SubscriptionId { get; init; }

    /// <summary>
    /// Unix timestamp (seconds). Fetch records created on or after this time.
    /// </summary>
    public int? From { get; init; }

    /// <summary>
    /// Unix timestamp (seconds). Fetch records created on or before this time.
    /// </summary>
    public int? To { get; init; }

    /// <summary>
    /// Number of records to return per call. Maximum 100. Default 10.
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int Count { get; init; } = 10;

    /// <summary>
    /// Number of records to skip. Use with count for pagination. Default 0.
    /// </summary>
    [Minimum(0)]
    public int Skip { get; init; } = 0;
}
