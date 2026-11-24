using Upstox.Models;

namespace Upstox.Requests.Order;

/// <summary>
/// The inputs of the ModifyOrder1 operation.
/// </summary>
public sealed record ModifyOrder1Request
{
    public required ModifyOrderRequest Body { get; init; }
}
