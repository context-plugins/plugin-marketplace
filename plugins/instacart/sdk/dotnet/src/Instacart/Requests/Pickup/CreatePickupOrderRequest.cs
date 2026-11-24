using Instacart.Models;

namespace Instacart.Requests.Pickup;

/// <summary>
/// The inputs of the CreatePickupOrder operation.
/// </summary>
public sealed record CreatePickupOrderRequest
{
    /// <summary>
    /// The unique identifier for the user in the retailer's system.
    /// </summary>
    public required string UserId { get; init; }

    public required CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi Body { get; init; }
}
