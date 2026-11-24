namespace FacebookBusinessManager.Requests.CommentsApi;

/// <summary>
/// The inputs of the DeleteComment operation.
/// </summary>
public sealed record DeleteCommentRequest
{
    /// <summary>
    /// The ID of the comment to delete
    /// </summary>
    public required string CommentId { get; init; }
}
