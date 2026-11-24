namespace BundleSocial.Requests.PostApi;

/// <summary>
/// The inputs of the PostGet operation.
/// </summary>
public sealed record PostGetRequest
{
    public required string Id { get; init; }
}
