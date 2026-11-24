using Shortcut.Models;

namespace Shortcut.Requests.Stories;

/// <summary>
/// The inputs of the UpdateMultipleStories operation.
/// </summary>
public sealed record UpdateMultipleStoriesRequest
{
    public required UpdateStories Body { get; init; }
}
