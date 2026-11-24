namespace GoogleCloudTalentSolution.Requests;

/// <summary>
/// The inputs of the JobsProjectsTenantsCompaniesList operation.
/// </summary>
public sealed record JobsProjectsTenantsCompaniesListRequest
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
    /// The maximum number of companies to be returned, at most 100. Default is 100 if a non-positive number is provided.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// The starting indicator from which to return results.
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// Set to true if the companies requested must have open jobs. Defaults to false. If true, at most page_size of companies are fetched, among which only those with open jobs are returned.
    /// </summary>
    public bool? RequireOpenJobs { get; init; }
}
