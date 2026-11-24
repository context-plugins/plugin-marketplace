namespace Buildkite.Requests.Clusters;

/// <summary>
/// The inputs of the ListClusters operation.
/// </summary>
public sealed record ListClustersRequest
{
    /// <summary>
    /// Organization slug
    /// </summary>
    public required string Org { get; init; }
}
