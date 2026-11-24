using Instagram.Models;

namespace Instagram.Requests.Comments;

/// <summary>
/// The inputs of the CreateCommentReply operation.
/// </summary>
public sealed record CreateCommentReplyRequest
{
    public required string CommentId { get; init; }

    public required RepliesRequest Body { get; init; }
}
