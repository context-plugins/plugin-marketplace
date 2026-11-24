using FacebookBusinessManager.Models;

namespace FacebookBusinessManager.Requests.Posts;

/// <summary>
/// The inputs of the UpdatePost operation.
/// </summary>
public sealed record UpdatePostRequest
{
    /// <summary>
    /// The ID of the post (format PAGE_ID_POST_ID)
    /// </summary>
    public required string PostId { get; init; }

    public required RequestModel Body { get; init; }
}
