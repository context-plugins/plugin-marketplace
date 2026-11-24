using Shortcut.Models;

namespace Shortcut.Requests.Stories;

/// <summary>
/// The inputs of the QueryStories operation.
/// </summary>
public sealed record QueryStoriesRequest
{
    public required SearchStories Body { get; init; }
}
