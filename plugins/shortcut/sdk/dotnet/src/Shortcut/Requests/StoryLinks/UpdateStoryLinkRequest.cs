using Shortcut.Models;

namespace Shortcut.Requests.StoryLinks;

/// <summary>
/// The inputs of the UpdateStoryLink operation.
/// </summary>
public sealed record UpdateStoryLinkRequest
{
    /// <summary>
    /// The unique ID of the Story Link.
    /// </summary>
    public required long StoryLinkPublicId { get; init; }

    public required UpdateStoryLink Body { get; init; }
}
