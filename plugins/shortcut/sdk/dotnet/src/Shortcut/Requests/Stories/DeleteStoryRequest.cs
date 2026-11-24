namespace Shortcut.Requests.Stories;

/// <summary>
/// The inputs of the DeleteStory operation.
/// </summary>
public sealed record DeleteStoryRequest
{
    /// <summary>
    /// The ID of the Story.
    /// </summary>
    public required long StoryPublicId { get; init; }
}
