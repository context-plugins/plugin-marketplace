using GoogleCloudDataproc.Models;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the MetastoreProjectsLocationsServicesBackupsSetIamPolicy operation.
/// </summary>
public sealed record MetastoreProjectsLocationsServicesBackupsSetIamPolicyRequest
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
    /// Resource name segment (servicesId).
    /// </summary>
    public required string ServicesId { get; init; }

    /// <summary>
    /// Resource name segment (backupsId).
    /// </summary>
    public required string BackupsId { get; init; }

    public required SetIamPolicyRequest2 Body { get; init; }
}
