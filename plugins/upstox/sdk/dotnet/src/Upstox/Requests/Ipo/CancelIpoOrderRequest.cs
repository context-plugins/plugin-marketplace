namespace Upstox.Requests.Ipo;

/// <summary>
/// The inputs of the CancelIpoOrder operation.
/// </summary>
public sealed record CancelIpoOrderRequest
{
    /// <summary>
    /// IPO application id, as returned in <c>order_id</c> by the apply and orders APIs
    /// </summary>
    public required string OrderId { get; init; }
}
