namespace Curlec.Requests.Orders;

/// <summary>
/// The inputs of the FetchOrder operation.
/// </summary>
public sealed record FetchOrderRequest
{
    /// <summary>
    /// Order ID (order_*).
    /// </summary>
    public required string Id { get; init; }
}
