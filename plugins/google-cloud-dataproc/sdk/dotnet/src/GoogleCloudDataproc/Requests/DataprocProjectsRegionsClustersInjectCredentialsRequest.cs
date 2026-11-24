using GoogleCloudDataproc.Models;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsRegionsClustersInjectCredentials operation.
/// </summary>
public sealed record DataprocProjectsRegionsClustersInjectCredentialsRequest
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

    public required InjectCredentialsRequest Body { get; init; }
}
