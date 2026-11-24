namespace Shortcut.Requests.Stories;

/// <summary>
/// The inputs of the ListStorySubTasks operation.
/// </summary>
public sealed record ListStorySubTasksRequest
{
    /// <summary>
    /// The ID of the Story.
    /// </summary>
    public required long StoryPublicId { get; init; }
}
