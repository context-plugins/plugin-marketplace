namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscFacebookGetRecommendationComments operation.
/// </summary>
public sealed record MiscFacebookGetRecommendationCommentsRequest
{
    public required string RecommendationId { get; init; }

    public required string TeamId { get; init; }
}
