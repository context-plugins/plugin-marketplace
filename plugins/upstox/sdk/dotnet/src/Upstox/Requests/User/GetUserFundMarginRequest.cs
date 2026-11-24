using Upstox.Models.Enums;

namespace Upstox.Requests.User;

/// <summary>
/// The inputs of the GetUserFundMargin operation.
/// </summary>
public sealed record GetUserFundMarginRequest
{
    public Segment1? Segment { get; init; }
}
