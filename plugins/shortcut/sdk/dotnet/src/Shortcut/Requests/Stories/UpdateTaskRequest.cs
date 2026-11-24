using Shortcut.Models;

namespace Shortcut.Requests.Stories;

/// <summary>
/// The inputs of the UpdateTask operation.
/// </summary>
public sealed record UpdateTaskRequest
{
    /// <summary>
    /// The unique identifier of the parent Story.
    /// </summary>
    public required long StoryPublicId { get; init; }

    /// <summary>
    /// The unique identifier of the Task you wish to update.
    /// </summary>
    public required long TaskPublicId { get; init; }

    public required UpdateTask Body { get; init; }
}
