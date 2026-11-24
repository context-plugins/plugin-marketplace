using Curlec.Models;

namespace Curlec.Requests.Orders;

/// <summary>
/// The inputs of the UpdateOrder operation.
/// </summary>
public sealed record UpdateOrderRequest
{
    /// <summary>
    /// Order ID (order_*).
    /// </summary>
    public required string Id { get; init; }

    public required OrdersRequest1 Body { get; init; }
}
