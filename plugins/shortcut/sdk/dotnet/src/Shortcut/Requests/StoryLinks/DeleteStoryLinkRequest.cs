namespace Shortcut.Requests.StoryLinks;

/// <summary>
/// The inputs of the DeleteStoryLink operation.
/// </summary>
public sealed record DeleteStoryLinkRequest
{
    /// <summary>
    /// The unique ID of the Story Link.
    /// </summary>
    public required long StoryLinkPublicId { get; init; }
}
