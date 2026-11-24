namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscFacebookGetRecommendationImportById operation.
/// </summary>
public sealed record MiscFacebookGetRecommendationImportByIdRequest
{
    public required string ImportId { get; init; }
}
