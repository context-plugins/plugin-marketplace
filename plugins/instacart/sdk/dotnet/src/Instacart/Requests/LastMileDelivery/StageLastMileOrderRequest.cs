namespace Instacart.Requests.LastMileDelivery;

/// <summary>
/// The inputs of the StageLastMileOrder operation.
/// </summary>
public sealed record StageLastMileOrderRequest
{
    /// <summary>
    /// The unique identifier for the order.
    /// </summary>
    public required string OrderId { get; init; }
}
