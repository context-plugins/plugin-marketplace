using Shortcut.Models;

namespace Shortcut.Requests.Epics;

/// <summary>
/// The inputs of the UpdateEpicComment operation.
/// </summary>
public sealed record UpdateEpicCommentRequest
{
    /// <summary>
    /// The ID of the associated Epic.
    /// </summary>
    public required long EpicPublicId { get; init; }

    /// <summary>
    /// The ID of the Comment.
    /// </summary>
    public required long CommentPublicId { get; init; }

    public required UpdateComment Body { get; init; }
}
