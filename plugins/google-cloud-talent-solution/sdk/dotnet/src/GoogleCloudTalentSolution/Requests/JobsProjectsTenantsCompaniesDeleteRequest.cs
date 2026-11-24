namespace GoogleCloudTalentSolution.Requests;

/// <summary>
/// The inputs of the JobsProjectsTenantsCompaniesDelete operation.
/// </summary>
public sealed record JobsProjectsTenantsCompaniesDeleteRequest
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
    /// Resource name segment (companiesId).
    /// </summary>
    public required string CompaniesId { get; init; }
}
