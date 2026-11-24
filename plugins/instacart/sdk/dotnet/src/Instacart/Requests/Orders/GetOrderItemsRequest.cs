namespace Instacart.Requests.Orders;

/// <summary>
/// The inputs of the GetOrderItems operation.
/// </summary>
public sealed record GetOrderItemsRequest
{
    /// <summary>
    /// The unique identifier for the order.
    /// </summary>
    public required string OrderId { get; init; }
}
