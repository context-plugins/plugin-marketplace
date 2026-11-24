using GoogleCloudDataproc.Models;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsRegionsClustersRepair operation.
/// </summary>
public sealed record DataprocProjectsRegionsClustersRepairRequest
{
    /// <summary>
    /// Required. The ID of the Google Cloud Platform project the cluster belongs to.
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

    public required RepairClusterRequest Body { get; init; }
}
