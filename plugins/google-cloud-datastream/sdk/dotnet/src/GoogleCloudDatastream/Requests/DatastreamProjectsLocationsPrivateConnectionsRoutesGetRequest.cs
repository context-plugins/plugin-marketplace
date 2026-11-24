namespace GoogleCloudDatastream.Requests;

/// <summary>
/// The inputs of the DatastreamProjectsLocationsPrivateConnectionsRoutesGet operation.
/// </summary>
public sealed record DatastreamProjectsLocationsPrivateConnectionsRoutesGetRequest
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
    /// Resource name segment (privateConnectionsId).
    /// </summary>
    public required string PrivateConnectionsId { get; init; }

    /// <summary>
    /// Resource name segment (routesId).
    /// </summary>
    public required string RoutesId { get; init; }
}
