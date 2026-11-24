using CallNode.Core.Validation.Attributes;
using CallNode.Models.Enums;

namespace CallNode.Requests.Email;

/// <summary>
/// The inputs of the ListEmailMessages operation.
/// </summary>
public sealed record ListEmailMessagesRequest
{
    public Status3? Status { get; init; }

    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 25;

    /// <summary>
    /// The <c>nextCursor</c> of the previous page.
    /// </summary>
    public string? Cursor { get; init; }
}
