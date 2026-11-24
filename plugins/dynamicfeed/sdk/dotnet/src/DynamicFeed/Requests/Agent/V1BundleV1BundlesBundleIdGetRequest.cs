namespace DynamicFeed.Requests.Agent;

/// <summary>
/// The inputs of the V1BundleV1BundlesBundleIdGet operation.
/// </summary>
public sealed record V1BundleV1BundlesBundleIdGetRequest
{
    public required string BundleId { get; init; }
}
