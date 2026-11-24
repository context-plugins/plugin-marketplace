namespace Instagram.Requests.Comments;

/// <summary>
/// The inputs of the GetCommentReplies operation.
/// </summary>
public sealed record GetCommentRepliesRequest
{
    public required string CommentId { get; init; }

    public required string AccessToken { get; init; }

    public string? Fields { get; init; }
}
