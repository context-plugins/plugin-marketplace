using GoogleCloudTalentSolution.Models;

namespace GoogleCloudTalentSolution.Requests;

/// <summary>
/// The inputs of the JobsProjectsTenantsJobsBatchUpdate operation.
/// </summary>
public sealed record JobsProjectsTenantsJobsBatchUpdateRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (tenantsId).
    /// </summary>
    public required string TenantsId { get; init; }

    public required BatchUpdateJobsRequest Body { get; init; }
}
