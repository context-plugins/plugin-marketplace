namespace Shortcut.Requests.Stories;

/// <summary>
/// The inputs of the UnlinkCommentThreadFromSlack operation.
/// </summary>
public sealed record UnlinkCommentThreadFromSlackRequest
{
    /// <summary>
    /// The ID of the Story to unlink.
    /// </summary>
    public required long StoryPublicId { get; init; }

    /// <summary>
    /// The ID of the Comment to unlink.
    /// </summary>
    public required long CommentPublicId { get; init; }
}
