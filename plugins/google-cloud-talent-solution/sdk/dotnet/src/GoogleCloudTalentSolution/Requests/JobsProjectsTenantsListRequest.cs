namespace GoogleCloudTalentSolution.Requests;

/// <summary>
/// The inputs of the JobsProjectsTenantsList operation.
/// </summary>
public sealed record JobsProjectsTenantsListRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// The maximum number of tenants to be returned, at most 100. Default is 100 if a non-positive number is provided.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// The starting indicator from which to return results.
    /// </summary>
    public string? PageToken { get; init; }
}
