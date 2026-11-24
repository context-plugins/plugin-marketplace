using Instacart.Models;

namespace Instacart.Requests.Delivery;

/// <summary>
/// The inputs of the PreviewDeliveryTimeSlots operation.
/// </summary>
public sealed record PreviewDeliveryTimeSlotsRequest
{
    /// <summary>
    /// The unique identifier for the user in the retailer's system.
    /// </summary>
    public required string UserId { get; init; }

    public required PreviewServiceOptionsRequest Body { get; init; }
}
