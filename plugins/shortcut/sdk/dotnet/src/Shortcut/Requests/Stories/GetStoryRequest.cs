namespace Shortcut.Requests.Stories;

/// <summary>
/// The inputs of the GetStory operation.
/// </summary>
public sealed record GetStoryRequest
{
    /// <summary>
    /// The ID of the Story.
    /// </summary>
    public required long StoryPublicId { get; init; }
}
