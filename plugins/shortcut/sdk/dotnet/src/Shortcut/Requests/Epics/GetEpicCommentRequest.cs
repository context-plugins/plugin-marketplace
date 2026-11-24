namespace Shortcut.Requests.Epics;

/// <summary>
/// The inputs of the GetEpicComment operation.
/// </summary>
public sealed record GetEpicCommentRequest
{
    /// <summary>
    /// The ID of the associated Epic.
    /// </summary>
    public required long EpicPublicId { get; init; }

    /// <summary>
    /// The ID of the Comment.
    /// </summary>
    public required long CommentPublicId { get; init; }
}
