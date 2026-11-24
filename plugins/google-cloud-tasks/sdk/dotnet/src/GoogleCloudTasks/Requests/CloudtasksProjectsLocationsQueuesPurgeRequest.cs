namespace GoogleCloudTasks.Requests;

/// <summary>
/// The inputs of the CloudtasksProjectsLocationsQueuesPurge operation.
/// </summary>
public sealed record CloudtasksProjectsLocationsQueuesPurgeRequest
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
    /// Resource name segment (queuesId).
    /// </summary>
    public required string QueuesId { get; init; }

    public required object Body { get; init; }
}
