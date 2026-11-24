using System.ComponentModel.DataAnnotations;

namespace Upstox.Requests.MutualFund;

/// <summary>
/// The inputs of the GetMutualFundOrders operation.
/// </summary>
public sealed record GetMutualFundOrdersRequest
{
    /// <summary>
    /// Mutual fund order status
    /// </summary>
    [RegularExpression("^(ALL|ARCHIVED|NEW|PENDING|OPEN|INPROCESS|COMPLETED|PLACED|REJECTED|CREATED|PAYMENT_PENDING|FAILED|CANCELLED|VERIFIED)$")]
    public string Status { get; init; } = "ALL";

    /// <summary>
    /// Mutual fund order transaction type
    /// </summary>
    public string TransactionType { get; init; } = "ALL";

    /// <summary>
    /// Page number for pagination.
    /// </summary>
    public int PageNumber { get; init; } = 1;

    /// <summary>
    /// no of records in a single page
    /// </summary>
    public int Records { get; init; } = 10;
}
