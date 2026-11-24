namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscFacebookGetRecommendationById operation.
/// </summary>
public sealed record MiscFacebookGetRecommendationByIdRequest
{
    public required string RecommendationId { get; init; }

    public required string TeamId { get; init; }
}
