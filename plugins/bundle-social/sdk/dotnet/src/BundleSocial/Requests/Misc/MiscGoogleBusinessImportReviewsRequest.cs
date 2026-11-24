using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscGoogleBusinessImportReviews operation.
/// </summary>
public sealed record MiscGoogleBusinessImportReviewsRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscGoogleBusinessReviewsImportRequest? Body { get; init; }
}
