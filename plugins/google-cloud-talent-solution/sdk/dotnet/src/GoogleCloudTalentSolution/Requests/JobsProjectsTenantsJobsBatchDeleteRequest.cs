using GoogleCloudTalentSolution.Models;

namespace GoogleCloudTalentSolution.Requests;

/// <summary>
/// The inputs of the JobsProjectsTenantsJobsBatchDelete operation.
/// </summary>
public sealed record JobsProjectsTenantsJobsBatchDeleteRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (tenantsId).
    /// </summary>
    public required string TenantsId { get; init; }

    public required BatchDeleteJobsRequest Body { get; init; }
}
