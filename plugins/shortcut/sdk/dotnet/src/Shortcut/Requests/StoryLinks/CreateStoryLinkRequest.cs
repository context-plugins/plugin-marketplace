using Shortcut.Models;

namespace Shortcut.Requests.StoryLinks;

/// <summary>
/// The inputs of the CreateStoryLink operation.
/// </summary>
public sealed record CreateStoryLinkRequest
{
    public required CreateStoryLink Body { get; init; }
}
