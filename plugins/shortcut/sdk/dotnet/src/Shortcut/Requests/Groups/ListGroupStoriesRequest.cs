using System;

namespace Shortcut.Requests.Groups;

/// <summary>
/// The inputs of the ListGroupStories operation.
/// </summary>
public sealed record ListGroupStoriesRequest
{
    /// <summary>
    /// The unique ID of the Group.
    /// </summary>
    public required Guid GroupPublicId { get; init; }

    /// <summary>
    /// The maximum number of results to return. (Defaults to 1000, max 1000)
    /// </summary>
    public long? Limit { get; init; }

    /// <summary>
    /// The offset at which to begin returning results. (Defaults to 0)
    /// </summary>
    public long? Offset { get; init; }
}
