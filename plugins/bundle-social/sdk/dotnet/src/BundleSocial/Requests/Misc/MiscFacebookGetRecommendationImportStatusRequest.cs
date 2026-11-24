namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscFacebookGetRecommendationImportStatus operation.
/// </summary>
public sealed record MiscFacebookGetRecommendationImportStatusRequest
{
    public required string TeamId { get; init; }
}
