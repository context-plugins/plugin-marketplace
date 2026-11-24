using GoogleCloudTalentSolution.Models;

namespace GoogleCloudTalentSolution.Requests;

/// <summary>
/// The inputs of the JobsProjectsTenantsCompaniesPatch operation.
/// </summary>
public sealed record JobsProjectsTenantsCompaniesPatchRequest
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

    /// <summary>
    /// Strongly recommended for the best service experience. If update_mask is provided, only the specified fields in company are updated. Otherwise all the fields are updated. A field mask to specify the company fields to be updated. Only top level fields of Company are supported.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required Company Body { get; init; }
}
