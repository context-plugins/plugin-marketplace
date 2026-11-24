using GoogleCloudDataproc.Models;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsRegionsJobsTestIamPermissions operation.
/// </summary>
public sealed record DataprocProjectsRegionsJobsTestIamPermissionsRequest
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
    /// Resource name segment (jobsId).
    /// </summary>
    public required string JobsId { get; init; }

    public required TestIamPermissionsRequest Body { get; init; }
}
