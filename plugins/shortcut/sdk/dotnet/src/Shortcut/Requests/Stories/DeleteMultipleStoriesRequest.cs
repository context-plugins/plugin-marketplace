using Shortcut.Models;

namespace Shortcut.Requests.Stories;

/// <summary>
/// The inputs of the DeleteMultipleStories operation.
/// </summary>
public sealed record DeleteMultipleStoriesRequest
{
    public required DeleteStories Body { get; init; }
}
