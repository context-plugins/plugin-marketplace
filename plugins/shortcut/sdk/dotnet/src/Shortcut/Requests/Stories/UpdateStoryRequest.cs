using Shortcut.Models;

namespace Shortcut.Requests.Stories;

/// <summary>
/// The inputs of the UpdateStory operation.
/// </summary>
public sealed record UpdateStoryRequest
{
    /// <summary>
    /// The unique identifier of this story.
    /// </summary>
    public required long StoryPublicId { get; init; }

    public required UpdateStory Body { get; init; }
}
