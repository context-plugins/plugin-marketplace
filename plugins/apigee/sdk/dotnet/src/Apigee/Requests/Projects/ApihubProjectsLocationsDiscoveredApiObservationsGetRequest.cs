namespace Apigee.Requests.Projects;

/// <summary>
/// The inputs of the ApihubProjectsLocationsDiscoveredApiObservationsGet operation.
/// </summary>
public sealed record ApihubProjectsLocationsDiscoveredApiObservationsGetRequest
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
    /// Resource name segment (discoveredApiObservationsId).
    /// </summary>
    public required string DiscoveredApiObservationsId { get; init; }
}
