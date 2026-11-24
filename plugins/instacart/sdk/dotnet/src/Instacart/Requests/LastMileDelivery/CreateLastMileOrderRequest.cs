using Instacart.Models;

namespace Instacart.Requests.LastMileDelivery;

/// <summary>
/// The inputs of the CreateLastMileOrder operation.
/// </summary>
public sealed record CreateLastMileOrderRequest
{
    /// <summary>
    /// The unique identifier for the user in the retailer's system.
    /// </summary>
    public required string UserId { get; init; }

    public required CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi Body { get; init; }
}
