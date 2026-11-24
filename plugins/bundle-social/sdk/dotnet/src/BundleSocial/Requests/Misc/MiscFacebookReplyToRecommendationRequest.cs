using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscFacebookReplyToRecommendation operation.
/// </summary>
public sealed record MiscFacebookReplyToRecommendationRequest
{
    public required string RecommendationId { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscFacebookRecommendationsReplyRequest? Body { get; init; }
}
