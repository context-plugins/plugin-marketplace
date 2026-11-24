namespace Upstox.Requests.Order;

/// <summary>
/// The inputs of the CancelMultiOrder operation.
/// </summary>
public sealed record CancelMultiOrderRequest
{
    /// <summary>
    /// The tag associated with the orders for which the orders must be cancelled
    /// </summary>
    public string? Tag { get; init; }

    /// <summary>
    /// The segment for which the orders must be cancelled
    /// </summary>
    public string? Segment { get; init; }
}
