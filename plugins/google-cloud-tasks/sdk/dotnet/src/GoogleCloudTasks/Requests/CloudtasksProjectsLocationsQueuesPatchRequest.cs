using GoogleCloudTasks.Models;

namespace GoogleCloudTasks.Requests;

/// <summary>
/// The inputs of the CloudtasksProjectsLocationsQueuesPatch operation.
/// </summary>
public sealed record CloudtasksProjectsLocationsQueuesPatchRequest
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

    /// <summary>
    /// A mask used to specify which fields of the queue are being updated. If empty, then all fields will be updated.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required QueueModel Body { get; init; }
}
