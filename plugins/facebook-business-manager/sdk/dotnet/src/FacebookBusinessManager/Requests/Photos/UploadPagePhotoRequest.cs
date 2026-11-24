using FacebookBusinessManager.Models;

namespace FacebookBusinessManager.Requests.Photos;

/// <summary>
/// The inputs of the UploadPagePhoto operation.
/// </summary>
public sealed record UploadPagePhotoRequest
{
    /// <summary>
    /// The ID of the Facebook Page
    /// </summary>
    public required string PageId { get; init; }

    public required PhotosRequest Body { get; init; }
}
