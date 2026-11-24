using GoogleCloudTalentSolution.Models;

namespace GoogleCloudTalentSolution.Requests;

/// <summary>
/// The inputs of the JobsProjectsTenantsJobsPatch operation.
/// </summary>
public sealed record JobsProjectsTenantsJobsPatchRequest
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

    /// <summary>
    /// Strongly recommended for the best service experience. If update_mask is provided, only the specified fields in job are updated. Otherwise all the fields are updated. A field mask to restrict the fields that are updated. Only top level fields of Job are supported.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required Job Body { get; init; }
}
