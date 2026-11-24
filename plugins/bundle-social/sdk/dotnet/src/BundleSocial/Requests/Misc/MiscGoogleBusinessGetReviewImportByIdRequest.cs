namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscGoogleBusinessGetReviewImportById operation.
/// </summary>
public sealed record MiscGoogleBusinessGetReviewImportByIdRequest
{
    public required string ImportId { get; init; }
}
