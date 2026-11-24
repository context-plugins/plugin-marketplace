namespace Shortcut.Requests.Stories;

/// <summary>
/// The inputs of the StoryHistory operation.
/// </summary>
public sealed record StoryHistoryRequest
{
    /// <summary>
    /// The ID of the Story.
    /// </summary>
    public required long StoryPublicId { get; init; }
}
