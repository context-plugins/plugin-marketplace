using Upstox.Models;

namespace Upstox.Requests.Order;

/// <summary>
/// The inputs of the PlaceGttOrder operation.
/// </summary>
public sealed record PlaceGttOrderRequest
{
    public string? Origin { get; init; }

    public required GttPlaceOrderRequest Body { get; init; }
}
