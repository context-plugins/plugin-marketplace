using Shortcut.Models;

namespace Shortcut.Requests.Stories;

/// <summary>
/// The inputs of the CreateMultipleStories operation.
/// </summary>
public sealed record CreateMultipleStoriesRequest
{
    public required CreateStories Body { get; init; }
}
