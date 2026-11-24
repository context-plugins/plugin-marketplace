namespace BundleSocial.Requests.UploadApi;

/// <summary>
/// The inputs of the UploadDelete operation.
/// </summary>
public sealed record UploadDeleteRequest
{
    public required string Id { get; init; }
}
