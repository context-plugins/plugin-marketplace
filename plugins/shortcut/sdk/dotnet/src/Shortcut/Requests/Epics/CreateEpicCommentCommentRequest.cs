using Shortcut.Models;

namespace Shortcut.Requests.Epics;

/// <summary>
/// The inputs of the CreateEpicCommentComment operation.
/// </summary>
public sealed record CreateEpicCommentCommentRequest
{
    /// <summary>
    /// The ID of the associated Epic.
    /// </summary>
    public required long EpicPublicId { get; init; }

    /// <summary>
    /// The ID of the parent Epic Comment.
    /// </summary>
    public required long CommentPublicId { get; init; }

    public required CreateCommentComment Body { get; init; }
}
