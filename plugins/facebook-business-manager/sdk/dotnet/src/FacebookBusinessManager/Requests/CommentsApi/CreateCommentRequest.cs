using FacebookBusinessManager.Models;

namespace FacebookBusinessManager.Requests.CommentsApi;

/// <summary>
/// The inputs of the CreateComment operation.
/// </summary>
public sealed record CreateCommentRequest
{
    /// <summary>
    /// The ID of the post (format PAGE_ID_POST_ID)
    /// </summary>
    public required string PostId { get; init; }

    public required CommentsRequest Body { get; init; }
}
