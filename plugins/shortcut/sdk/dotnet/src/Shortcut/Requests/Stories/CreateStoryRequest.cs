using Shortcut.Models;

namespace Shortcut.Requests.Stories;

/// <summary>
/// The inputs of the CreateStory operation.
/// </summary>
public sealed record CreateStoryRequest
{
    /// <summary>
    /// Request parameters for creating a story.
    /// </summary>
    public required CreateStoryParams Body { get; init; }
}
