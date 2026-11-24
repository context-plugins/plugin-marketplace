namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscGoogleBusinessGetReviewImportStatus operation.
/// </summary>
public sealed record MiscGoogleBusinessGetReviewImportStatusRequest
{
    public required string TeamId { get; init; }
}
