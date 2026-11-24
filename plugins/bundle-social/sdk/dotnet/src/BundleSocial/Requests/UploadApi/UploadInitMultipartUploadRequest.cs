using BundleSocial.Models;

namespace BundleSocial.Requests.UploadApi;

/// <summary>
/// The inputs of the UploadInitMultipartUpload operation.
/// </summary>
public sealed record UploadInitMultipartUploadRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1UploadMultipartInitRequest? Body { get; init; }
}
