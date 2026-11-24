using FacebookBusinessManager.Core.Validation.Attributes;

namespace FacebookBusinessManager.Requests.Posts;

/// <summary>
/// The inputs of the GetPageFeed operation.
/// </summary>
public sealed record GetPageFeedRequest
{
    /// <summary>
    /// The ID of the Facebook Page
    /// </summary>
    public required string PageId { get; init; }

    /// <summary>
    /// Comma-separated list of fields to include in the response
    /// </summary>
    public string? Fields { get; init; }

    /// <summary>
    /// Maximum number of objects to return per page
    /// </summary>
    [Maximum(100)]
    public int Limit { get; init; } = 25;

    /// <summary>
    /// Cursor for forward pagination
    /// </summary>
    public string? After { get; init; }
}
