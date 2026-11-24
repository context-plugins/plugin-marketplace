namespace Shortcut.Requests.Stories;

/// <summary>
/// The inputs of the GetStoryComment operation.
/// </summary>
public sealed record GetStoryCommentRequest
{
    /// <summary>
    /// The ID of the Story that the Comment is in.
    /// </summary>
    public required long StoryPublicId { get; init; }

    /// <summary>
    /// The ID of the Comment.
    /// </summary>
    public required long CommentPublicId { get; init; }
}
