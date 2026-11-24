using Instacart.Models;

namespace Instacart.Requests.Pickup;

/// <summary>
/// The inputs of the PreviewPickupTimeSlots operation.
/// </summary>
public sealed record PreviewPickupTimeSlotsRequest
{
    /// <summary>
    /// The unique identifier for the user in the retailer's system.
    /// </summary>
    public required string UserId { get; init; }

    public required PreviewServiceOptionsRequest Body { get; init; }
}
