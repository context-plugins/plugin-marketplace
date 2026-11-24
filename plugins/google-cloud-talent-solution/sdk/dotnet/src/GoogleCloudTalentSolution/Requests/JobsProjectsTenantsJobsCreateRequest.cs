using GoogleCloudTalentSolution.Models;

namespace GoogleCloudTalentSolution.Requests;

/// <summary>
/// The inputs of the JobsProjectsTenantsJobsCreate operation.
/// </summary>
public sealed record JobsProjectsTenantsJobsCreateRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (tenantsId).
    /// </summary>
    public required string TenantsId { get; init; }

    public required Job Body { get; init; }
}
