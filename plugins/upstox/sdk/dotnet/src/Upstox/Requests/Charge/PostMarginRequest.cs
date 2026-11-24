using Upstox.Models;

namespace Upstox.Requests.Charge;

/// <summary>
/// The inputs of the PostMargin operation.
/// </summary>
public sealed record PostMarginRequest
{
    public required MarginRequest Body { get; init; }
}
