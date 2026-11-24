using Shortcut.Models;

namespace Shortcut.Requests.Stories;

/// <summary>
/// The inputs of the DeleteStoryReaction operation.
/// </summary>
public sealed record DeleteStoryReactionRequest
{
    /// <summary>
    /// The ID of the Story that the Comment is in.
    /// </summary>
    public required long StoryPublicId { get; init; }

    /// <summary>
    /// The ID of the Comment.
    /// </summary>
    public required long CommentPublicId { get; init; }

    public required CreateOrDeleteStoryReaction Body { get; init; }
}
