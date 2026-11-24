using BundleSocial.Models;

namespace BundleSocial.Requests.UploadApi;

/// <summary>
/// The inputs of the UploadDeleteMany operation.
/// </summary>
public sealed record UploadDeleteManyRequest
{
    /// <summary>
    /// Body
    /// </summary>
    public ApiV1UploadRequest? Body { get; init; }
}
