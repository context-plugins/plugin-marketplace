using GoogleCloudDatastream.Models;

namespace GoogleCloudDatastream.Requests;

/// <summary>
/// The inputs of the DatastreamProjectsLocationsStreamsObjectsStartBackfillJob operation.
/// </summary>
public sealed record DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest
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

    /// <summary>
    /// Resource name segment (objectsId).
    /// </summary>
    public required string ObjectsId { get; init; }

    public required StartBackfillJobRequest Body { get; init; }
}
