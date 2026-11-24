namespace GoogleCloudTalentSolution.Requests;

/// <summary>
/// The inputs of the JobsProjectsTenantsJobsDelete operation.
/// </summary>
public sealed record JobsProjectsTenantsJobsDeleteRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (tenantsId).
    /// </summary>
    public required string TenantsId { get; init; }

    /// <summary>
    /// Resource name segment (jobsId).
    /// </summary>
    public required string JobsId { get; init; }
}
