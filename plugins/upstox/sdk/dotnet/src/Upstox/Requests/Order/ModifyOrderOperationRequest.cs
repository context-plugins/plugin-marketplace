using Upstox.Models;

namespace Upstox.Requests.Order;

/// <summary>
/// The inputs of the ModifyOrder operation.
/// </summary>
public sealed record ModifyOrderOperationRequest
{
    public required ModifyOrderRequest Body { get; init; }
}
