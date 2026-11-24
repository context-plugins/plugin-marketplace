using BundleSocial.Models;

namespace BundleSocial.Requests.UploadApi;

/// <summary>
/// The inputs of the UploadCreateFromUrl operation.
/// </summary>
public sealed record UploadCreateFromUrlRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1UploadFromUrlRequest? Body { get; init; }
}
