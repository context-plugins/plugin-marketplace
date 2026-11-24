using Shortcut.Models;

namespace Shortcut.Requests.Stories;

/// <summary>
/// The inputs of the CreateStoryComment operation.
/// </summary>
public sealed record CreateStoryCommentRequest
{
    /// <summary>
    /// The ID of the Story that the Comment is in.
    /// </summary>
    public required long StoryPublicId { get; init; }

    public required CreateStoryComment Body { get; init; }
}
