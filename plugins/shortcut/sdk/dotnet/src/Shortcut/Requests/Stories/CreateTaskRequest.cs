using Shortcut.Models;

namespace Shortcut.Requests.Stories;

/// <summary>
/// The inputs of the CreateTask operation.
/// </summary>
public sealed record CreateTaskRequest
{
    /// <summary>
    /// The ID of the Story that the Task will be in.
    /// </summary>
    public required long StoryPublicId { get; init; }

    public required CreateTask Body { get; init; }
}
