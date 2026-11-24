namespace BundleSocial.Requests.PostApi;

/// <summary>
/// The inputs of the PostDelete operation.
/// </summary>
public sealed record PostDeleteRequest
{
    public required string Id { get; init; }
}
