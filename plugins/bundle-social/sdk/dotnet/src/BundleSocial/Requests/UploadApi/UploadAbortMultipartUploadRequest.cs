using BundleSocial.Models;

namespace BundleSocial.Requests.UploadApi;

/// <summary>
/// The inputs of the UploadAbortMultipartUpload operation.
/// </summary>
public sealed record UploadAbortMultipartUploadRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1UploadMultipartAbortRequest? Body { get; init; }
}
