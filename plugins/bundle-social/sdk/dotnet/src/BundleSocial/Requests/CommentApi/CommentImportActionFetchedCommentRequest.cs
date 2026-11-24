using BundleSocial.Models;

namespace BundleSocial.Requests.CommentApi;

/// <summary>
/// The inputs of the CommentImportActionFetchedComment operation.
/// </summary>
public sealed record CommentImportActionFetchedCommentRequest
{
    public required string CommentId { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public ApiV1CommentImportCommentsActionRequest? Body { get; init; }
}
