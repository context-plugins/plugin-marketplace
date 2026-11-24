using Upstox.Models;

namespace Upstox.Requests.Order;

/// <summary>
/// The inputs of the CancelGttOrder operation.
/// </summary>
public sealed record CancelGttOrderRequest
{
    public string? Origin { get; init; }

    public required GttCancelOrderRequest Body { get; init; }
}
