using Instagram.Models;

namespace Instagram.Requests.Comments;

/// <summary>
/// The inputs of the CreateComment operation.
/// </summary>
public sealed record CreateCommentRequest
{
    public required string MediaId { get; init; }

    public required CommentsRequest Body { get; init; }
}
