using Instacart.Models;

namespace Instacart.Requests.Delivery;

/// <summary>
/// The inputs of the ReserveDeliveryTimeSlot operation.
/// </summary>
public sealed record ReserveDeliveryTimeSlotRequest
{
    /// <summary>
    /// The unique identifier for the user in the retailer's system.
    /// </summary>
    public required string UserId { get; init; }

    public required ReserveTimeSlotRequest Body { get; init; }
}
