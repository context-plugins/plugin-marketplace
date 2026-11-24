using CallNode.Core.Validation.Attributes;
using CallNode.Models.Enums;

namespace CallNode.Requests.OutboundCalls;

/// <summary>
/// The inputs of the ListCalls operation.
/// </summary>
public sealed record ListCallsRequest
{
    /// <summary>
    /// Filter by status. Repeat the parameter to filter on several.
    /// </summary>
    public CallStatus? Status { get; init; }

    /// <summary>
    /// Page size. Defaults to 50, capped at 200.
    /// </summary>
    [Maximum(200)]
    public int Limit { get; init; } = 50;

    /// <summary>
    /// Opaque cursor from a previous response's <c>nextCursor</c>.
    /// </summary>
    public string? Cursor { get; init; }
}
