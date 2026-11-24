using GoogleCloudDataproc.Models;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsRegionsClustersNodeGroupsRepair operation.
/// </summary>
public sealed record DataprocProjectsRegionsClustersNodeGroupsRepairRequest
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

    public required RepairNodeGroupRequest Body { get; init; }
}
