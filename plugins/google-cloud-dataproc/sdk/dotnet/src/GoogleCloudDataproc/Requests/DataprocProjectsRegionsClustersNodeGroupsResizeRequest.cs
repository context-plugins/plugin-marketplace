using GoogleCloudDataproc.Models;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsRegionsClustersNodeGroupsResize operation.
/// </summary>
public sealed record DataprocProjectsRegionsClustersNodeGroupsResizeRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (regionsId).
    /// </summary>
    public required string RegionsId { get; init; }

    /// <summary>
    /// Resource name segment (clustersId).
    /// </summary>
    public required string ClustersId { get; init; }

    /// <summary>
    /// Resource name segment (nodeGroupsId).
    /// </summary>
    public required string NodeGroupsId { get; init; }

    public required ResizeNodeGroupRequest Body { get; init; }
}
