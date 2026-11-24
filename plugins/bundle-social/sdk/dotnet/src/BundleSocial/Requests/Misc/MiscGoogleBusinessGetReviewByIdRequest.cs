namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscGoogleBusinessGetReviewById operation.
/// </summary>
public sealed record MiscGoogleBusinessGetReviewByIdRequest
{
    public required string ReviewId { get; init; }

    public required string TeamId { get; init; }
}
