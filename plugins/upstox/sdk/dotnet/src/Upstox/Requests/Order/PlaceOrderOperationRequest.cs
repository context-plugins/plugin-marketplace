using Upstox.Models;

namespace Upstox.Requests.Order;

/// <summary>
/// The inputs of the PlaceOrder operation.
/// </summary>
public sealed record PlaceOrderOperationRequest
{
    public required PlaceOrderV3Request Body { get; init; }
}
