using CallNode.Core.Validation.Attributes;
using CallNode.Models.Enums;

namespace CallNode.Requests.Faxes;

/// <summary>
/// The inputs of the ListFaxes operation.
/// </summary>
public sealed record ListFaxesRequest
{
    public Direction? Direction { get; init; }

    public StatusCallnodeIoFaxesApi? Status { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 25;

    /// <summary>
    /// The <c>nextCursor</c> of the previous page.
    /// </summary>
    public string? Cursor { get; init; }
}
