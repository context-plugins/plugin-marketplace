using System.Collections.Generic;
using Curlec.Core.Validation.Attributes;
using Curlec.Models.Enums;

namespace Curlec.Requests.Orders;

/// <summary>
/// The inputs of the FetchAllOrders operation.
/// </summary>
public sealed record FetchAllOrdersRequest
{
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

    /// <summary>
    /// 1 = orders with authorized payments only. 0 = without.
    /// </summary>
    public Authorized? Authorized { get; init; }

    /// <summary>
    /// Filter by receipt value.
    /// </summary>
    public string? Receipt { get; init; }

    /// <summary>
    /// Expand: payments, payments.card, transfers, virtual_account.
    /// </summary>
    public IReadOnlyList<ExpandRazorpayOrdersApi>? Expand { get; init; }
}
