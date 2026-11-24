using BundleSocial.Models;

namespace BundleSocial.Requests.UploadApi;

/// <summary>
/// The inputs of the UploadSignMultipartParts operation.
/// </summary>
public sealed record UploadSignMultipartPartsRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1UploadMultipartSignRequest? Body { get; init; }
}
