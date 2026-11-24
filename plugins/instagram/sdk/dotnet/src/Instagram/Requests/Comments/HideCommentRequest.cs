using Instagram.Models;

namespace Instagram.Requests.Comments;

/// <summary>
/// The inputs of the HideComment operation.
/// </summary>
public sealed record HideCommentRequest
{
    public required string CommentId { get; init; }

    public RequestModel? Body { get; init; }
}
