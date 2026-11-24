using GoogleCloudTalentSolution.Models;

namespace GoogleCloudTalentSolution.Requests;

/// <summary>
/// The inputs of the JobsProjectsTenantsPatch operation.
/// </summary>
public sealed record JobsProjectsTenantsPatchRequest
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
    /// Strongly recommended for the best service experience. If update_mask is provided, only the specified fields in tenant are updated. Otherwise all the fields are updated. A field mask to specify the tenant fields to be updated. Only top level fields of Tenant are supported.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required Tenant Body { get; init; }
}
