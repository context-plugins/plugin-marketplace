namespace GoogleCloudDatastream.Requests;

/// <summary>
/// The inputs of the DatastreamProjectsLocationsConnectionProfilesGet operation.
/// </summary>
public sealed record DatastreamProjectsLocationsConnectionProfilesGetRequest
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
    /// Resource name segment (connectionProfilesId).
    /// </summary>
    public required string ConnectionProfilesId { get; init; }
}
