namespace Shortcut.Requests.StoryLinks;

/// <summary>
/// The inputs of the GetStoryLink operation.
/// </summary>
public sealed record GetStoryLinkRequest
{
    /// <summary>
    /// The unique ID of the Story Link.
    /// </summary>
    public required long StoryLinkPublicId { get; init; }
}
