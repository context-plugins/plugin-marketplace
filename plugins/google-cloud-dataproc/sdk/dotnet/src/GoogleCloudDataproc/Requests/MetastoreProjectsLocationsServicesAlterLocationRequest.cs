using GoogleCloudDataproc.Models;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the MetastoreProjectsLocationsServicesAlterLocation operation.
/// </summary>
public sealed record MetastoreProjectsLocationsServicesAlterLocationRequest
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

    public required AlterMetadataResourceLocationRequest Body { get; init; }
}
