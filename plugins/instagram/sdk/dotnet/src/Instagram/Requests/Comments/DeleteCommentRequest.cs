namespace Instagram.Requests.Comments;

/// <summary>
/// The inputs of the DeleteComment operation.
/// </summary>
public sealed record DeleteCommentRequest
{
    public required string CommentId { get; init; }

    public required string AccessToken { get; init; }
}
