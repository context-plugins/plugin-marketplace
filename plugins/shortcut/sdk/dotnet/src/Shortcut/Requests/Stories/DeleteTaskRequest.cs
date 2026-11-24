namespace Shortcut.Requests.Stories;

/// <summary>
/// The inputs of the DeleteTask operation.
/// </summary>
public sealed record DeleteTaskRequest
{
    /// <summary>
    /// The unique ID of the Story this Task is associated with.
    /// </summary>
    public required long StoryPublicId { get; init; }

    /// <summary>
    /// The unique ID of the Task.
    /// </summary>
    public required long TaskPublicId { get; init; }
}
