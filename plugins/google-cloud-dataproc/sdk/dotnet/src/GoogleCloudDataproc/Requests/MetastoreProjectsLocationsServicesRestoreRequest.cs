using GoogleCloudDataproc.Models;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the MetastoreProjectsLocationsServicesRestore operation.
/// </summary>
public sealed record MetastoreProjectsLocationsServicesRestoreRequest
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

    public required RestoreServiceRequest Body { get; init; }
}
