namespace BundleSocial.Requests.PostApi;

/// <summary>
/// The inputs of the PostRetry operation.
/// </summary>
public sealed record PostRetryRequest
{
    public required string Id { get; init; }
}
