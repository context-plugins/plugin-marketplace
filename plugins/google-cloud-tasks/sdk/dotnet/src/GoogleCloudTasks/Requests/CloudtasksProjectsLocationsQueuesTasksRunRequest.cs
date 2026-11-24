using GoogleCloudTasks.Models;

namespace GoogleCloudTasks.Requests;

/// <summary>
/// The inputs of the CloudtasksProjectsLocationsQueuesTasksRun operation.
/// </summary>
public sealed record CloudtasksProjectsLocationsQueuesTasksRunRequest
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
    /// Resource name segment (tasksId).
    /// </summary>
    public required string TasksId { get; init; }

    public required RunTaskRequest Body { get; init; }
}
