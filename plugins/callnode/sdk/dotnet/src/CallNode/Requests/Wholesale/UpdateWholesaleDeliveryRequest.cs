using CallNode.Models;

namespace CallNode.Requests.Wholesale;

/// <summary>
/// The inputs of the UpdateWholesaleDelivery operation.
/// </summary>
public sealed record UpdateWholesaleDeliveryRequest
{
    /// <summary>
    /// The number's id (from the order response or your numbers list).
    /// </summary>
    public required string Id { get; init; }

    public required ApiV1WholesaleNumbersDeliveryRequest Body { get; init; }
}
