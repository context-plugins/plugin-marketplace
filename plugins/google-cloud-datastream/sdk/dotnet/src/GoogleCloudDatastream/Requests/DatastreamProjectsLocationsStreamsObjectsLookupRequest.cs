using GoogleCloudDatastream.Models;

namespace GoogleCloudDatastream.Requests;

/// <summary>
/// The inputs of the DatastreamProjectsLocationsStreamsObjectsLookup operation.
/// </summary>
public sealed record DatastreamProjectsLocationsStreamsObjectsLookupRequest
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
    /// Resource name segment (streamsId).
    /// </summary>
    public required string StreamsId { get; init; }

    public required LookupStreamObjectRequest Body { get; init; }
}
