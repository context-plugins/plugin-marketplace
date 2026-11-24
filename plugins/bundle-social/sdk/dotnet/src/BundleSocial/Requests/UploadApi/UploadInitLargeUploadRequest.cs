using BundleSocial.Models;

namespace BundleSocial.Requests.UploadApi;

/// <summary>
/// The inputs of the UploadInitLargeUpload operation.
/// </summary>
public sealed record UploadInitLargeUploadRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1UploadInitRequest? Body { get; init; }
}
