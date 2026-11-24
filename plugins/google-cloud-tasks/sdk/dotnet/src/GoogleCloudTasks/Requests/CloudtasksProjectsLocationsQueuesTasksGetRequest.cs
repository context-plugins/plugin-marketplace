using GoogleCloudTasks.Models.Enums;

namespace GoogleCloudTasks.Requests;

/// <summary>
/// The inputs of the CloudtasksProjectsLocationsQueuesTasksGet operation.
/// </summary>
public sealed record CloudtasksProjectsLocationsQueuesTasksGetRequest
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

    /// <summary>
    /// The response_view specifies which subset of the Task will be returned. By default response_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains. Authorization for FULL requires <c>cloudtasks.tasks.fullView</c> <see href="https://cloud.google.com/iam/">Google IAM</see> permission on the Task resource.
    /// </summary>
    public ResponseView2? ResponseView { get; init; }
}
