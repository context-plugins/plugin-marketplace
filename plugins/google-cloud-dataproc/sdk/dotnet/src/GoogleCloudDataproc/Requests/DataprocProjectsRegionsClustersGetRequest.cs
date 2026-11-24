namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsRegionsClustersGet operation.
/// </summary>
public sealed record DataprocProjectsRegionsClustersGetRequest
{
    /// <summary>
    /// Required. The ID of the Google Cloud Platform project that the cluster belongs to.
    /// </summary>
    public required string ProjectId { get; init; }

    /// <summary>
    /// Required. The region in which to handle the request.
    /// </summary>
    public required string Region { get; init; }

    /// <summary>
    /// Required. The cluster name.
    /// </summary>
    public required string ClusterName { get; init; }
}
