namespace Shortcut.Requests.Stories;

/// <summary>
/// The inputs of the ListStoryComment operation.
/// </summary>
public sealed record ListStoryCommentRequest
{
    /// <summary>
    /// The ID of the Story that the Comment is in.
    /// </summary>
    public required long StoryPublicId { get; init; }
}
