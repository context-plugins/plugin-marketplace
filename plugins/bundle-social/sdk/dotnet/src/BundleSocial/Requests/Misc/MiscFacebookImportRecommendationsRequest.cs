using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscFacebookImportRecommendations operation.
/// </summary>
public sealed record MiscFacebookImportRecommendationsRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscFacebookRecommendationsImportRequest? Body { get; init; }
}
