using BundleSocial.Models;

namespace BundleSocial.Requests.UploadApi;

/// <summary>
/// The inputs of the UploadCompleteMultipartUpload operation.
/// </summary>
public sealed record UploadCompleteMultipartUploadRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1UploadMultipartCompleteRequest? Body { get; init; }
}
