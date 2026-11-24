using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscFacebookReplyToRecommendationComment operation.
/// </summary>
public sealed record MiscFacebookReplyToRecommendationCommentRequest
{
    public required string RecommendationId { get; init; }

    public required string CommentId { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscFacebookRecommendationsCommentsReplyRequest? Body { get; init; }
}
