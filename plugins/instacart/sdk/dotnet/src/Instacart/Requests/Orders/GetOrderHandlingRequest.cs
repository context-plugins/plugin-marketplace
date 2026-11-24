namespace Instacart.Requests.Orders;

/// <summary>
/// The inputs of the GetOrderHandling operation.
/// </summary>
public sealed record GetOrderHandlingRequest
{
    /// <summary>
    /// The unique identifier for the order.
    /// </summary>
    public required string OrderId { get; init; }
}
