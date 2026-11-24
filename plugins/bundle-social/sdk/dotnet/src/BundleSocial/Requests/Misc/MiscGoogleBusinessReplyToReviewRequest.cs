using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscGoogleBusinessReplyToReview operation.
/// </summary>
public sealed record MiscGoogleBusinessReplyToReviewRequest
{
    public required string ReviewId { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscGoogleBusinessReviewsReplyRequest? Body { get; init; }
}
