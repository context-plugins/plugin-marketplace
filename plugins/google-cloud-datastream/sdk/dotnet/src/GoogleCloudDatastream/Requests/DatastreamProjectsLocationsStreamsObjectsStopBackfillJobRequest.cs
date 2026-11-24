namespace GoogleCloudDatastream.Requests;

/// <summary>
/// The inputs of the DatastreamProjectsLocationsStreamsObjectsStopBackfillJob operation.
/// </summary>
public sealed record DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest
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

    public required object Body { get; init; }
}
