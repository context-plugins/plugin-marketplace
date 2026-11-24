namespace Shortcut.Requests.Stories;

/// <summary>
/// The inputs of the DeleteStoryComment operation.
/// </summary>
public sealed record DeleteStoryCommentRequest
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
