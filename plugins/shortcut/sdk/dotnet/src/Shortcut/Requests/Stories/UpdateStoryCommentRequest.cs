using Shortcut.Models;

namespace Shortcut.Requests.Stories;

/// <summary>
/// The inputs of the UpdateStoryComment operation.
/// </summary>
public sealed record UpdateStoryCommentRequest
{
    /// <summary>
    /// The ID of the Story that the Comment is in.
    /// </summary>
    public required long StoryPublicId { get; init; }

    /// <summary>
    /// The ID of the Comment
    /// </summary>
    public required long CommentPublicId { get; init; }

    public required UpdateStoryComment Body { get; init; }
}
