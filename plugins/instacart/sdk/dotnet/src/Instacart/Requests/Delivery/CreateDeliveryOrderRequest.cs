using Instacart.Models;

namespace Instacart.Requests.Delivery;

/// <summary>
/// The inputs of the CreateDeliveryOrder operation.
/// </summary>
public sealed record CreateDeliveryOrderRequest
{
    /// <summary>
    /// The unique identifier for the user in the retailer's system.
    /// </summary>
    public required string UserId { get; init; }

    public required CreateOrderRequest Body { get; init; }
}
