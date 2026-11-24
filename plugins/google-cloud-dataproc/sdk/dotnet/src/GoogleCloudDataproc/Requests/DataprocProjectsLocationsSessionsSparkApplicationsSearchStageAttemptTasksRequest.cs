using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasks operation.
/// </summary>
public sealed record DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksRequest
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
    /// Resource name segment (sessionsId).
    /// </summary>
    public required string SessionsId { get; init; }

    /// <summary>
    /// Resource name segment (sparkApplicationsId).
    /// </summary>
    public required string SparkApplicationsId { get; init; }

    /// <summary>
    /// Optional. Maximum number of tasks to return in each response. The service may return fewer than this. The default page size is 10; the maximum page size is 100.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token received from a previous SearchSessionSparkApplicationStageAttemptTasks call. Provide this token to retrieve the subsequent page.
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// Required. Parent (Session) resource reference.
    /// </summary>
    public string? Parent { get; init; }

    /// <summary>
    /// Optional. Sort the tasks by runtime.
    /// </summary>
    public bool? SortRuntime { get; init; }

    /// <summary>
    /// Optional. Stage Attempt ID
    /// </summary>
    public int? StageAttemptId { get; init; }

    /// <summary>
    /// Optional. Stage ID
    /// </summary>
    public string? StageId { get; init; }

    /// <summary>
    /// Optional. List only tasks in the state.
    /// </summary>
    public TaskStatusEnum? TaskStatus { get; init; }
}
