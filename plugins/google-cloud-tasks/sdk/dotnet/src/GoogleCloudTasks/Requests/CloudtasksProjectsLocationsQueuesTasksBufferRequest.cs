using GoogleCloudTasks.Models;

namespace GoogleCloudTasks.Requests;

/// <summary>
/// The inputs of the CloudtasksProjectsLocationsQueuesTasksBuffer operation.
/// </summary>
public sealed record CloudtasksProjectsLocationsQueuesTasksBufferRequest
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
    /// Optional. Task ID for the task being created. If not provided, Cloud Tasks generates an ID for the task.
    /// </summary>
    public required string TaskId { get; init; }

    public required BufferTaskRequest Body { get; init; }
}
