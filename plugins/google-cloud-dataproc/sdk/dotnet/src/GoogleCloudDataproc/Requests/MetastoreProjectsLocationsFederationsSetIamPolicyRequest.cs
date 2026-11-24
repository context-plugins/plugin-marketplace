using GoogleCloudDataproc.Models;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the MetastoreProjectsLocationsFederationsSetIamPolicy operation.
/// </summary>
public sealed record MetastoreProjectsLocationsFederationsSetIamPolicyRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (locationsId).
    /// </summary>
    public required string LocationsId { get; init; }

    /// <summary>
    /// Resource name segment (federationsId).
    /// </summary>
    public required string FederationsId { get; init; }

    public required SetIamPolicyRequest2 Body { get; init; }
}
