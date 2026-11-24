using BundleSocial.Core.Models;

namespace BundleSocial.Requests.UploadApi;

/// <summary>
/// The inputs of the UploadCreate operation.
/// </summary>
public sealed record UploadCreateRequest
{
    public string? TeamId { get; init; }

    public BinaryContent? File { get; init; }
}
