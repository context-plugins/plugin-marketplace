using Upstox.Models;

namespace Upstox.Requests.Order;

/// <summary>
/// The inputs of the PlaceOrder1 operation.
/// </summary>
public sealed record PlaceOrder1Request
{
    public required PlaceOrderRequest Body { get; init; }
}
