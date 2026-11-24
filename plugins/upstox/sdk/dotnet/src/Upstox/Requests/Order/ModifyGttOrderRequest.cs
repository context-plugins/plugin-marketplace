using Upstox.Models;

namespace Upstox.Requests.Order;

/// <summary>
/// The inputs of the ModifyGttOrder operation.
/// </summary>
public sealed record ModifyGttOrderRequest
{
    public string? Origin { get; init; }

    public required GttModifyOrderRequest Body { get; init; }
}
