namespace Instacart.Requests.Delivery;

/// <summary>
/// The inputs of the CancelOrder operation.
/// </summary>
public sealed record CancelOrderRequest
{
    /// <summary>
    /// The unique identifier for the user in the retailer's system.
    /// </summary>
    public required string UserId { get; init; }

    /// <summary>
    /// The unique identifier for the order.
    /// </summary>
    public required string OrderId { get; init; }
}
