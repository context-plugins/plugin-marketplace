using BundleSocial.Models;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscGoogleBusinessDeleteReviewReply operation.
/// </summary>
public sealed record MiscGoogleBusinessDeleteReviewReplyRequest
{
    public required string ReviewId { get; init; }

    /// <summary>
    /// Body
    /// </summary>
    public ApiV1MiscGoogleBusinessReviewsReplyRequest1? Body { get; init; }
}
