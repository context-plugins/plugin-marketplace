using GoogleCloudDatastream.Models;

namespace GoogleCloudDatastream.Requests;

/// <summary>
/// The inputs of the DatastreamProjectsLocationsConnectionProfilesDiscover operation.
/// </summary>
public sealed record DatastreamProjectsLocationsConnectionProfilesDiscoverRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (locationsId).
    /// </summary>
    public required string LocationsId { get; init; }

    public required DiscoverConnectionProfileRequest Body { get; init; }
}
