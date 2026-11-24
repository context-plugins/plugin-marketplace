namespace BundleSocial.Requests.UploadApi;

/// <summary>
/// The inputs of the UploadGet operation.
/// </summary>
public sealed record UploadGetRequest
{
    public required string Id { get; init; }
}
