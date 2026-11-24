using BundleSocial.Models;

namespace BundleSocial.Requests.UploadApi;

/// <summary>
/// The inputs of the UploadFinalizeLargeUpload operation.
/// </summary>
public sealed record UploadFinalizeLargeUploadRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1UploadFinalizeRequest? Body { get; init; }
}
