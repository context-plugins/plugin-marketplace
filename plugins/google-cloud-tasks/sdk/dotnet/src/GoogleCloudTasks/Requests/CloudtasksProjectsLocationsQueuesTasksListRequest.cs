using GoogleCloudTasks.Models.Enums;

namespace GoogleCloudTasks.Requests;

/// <summary>
/// The inputs of the CloudtasksProjectsLocationsQueuesTasksList operation.
/// </summary>
public sealed record CloudtasksProjectsLocationsQueuesTasksListRequest
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
    /// Maximum page size. Fewer tasks than requested might be returned, even if more tasks exist; use next_page_token in the response to determine if more tasks exist. The maximum page size is 1000. If unspecified, the page size will be the maximum.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// A token identifying the page of results to return. To request the first page results, page_token must be empty. To request the next page of results, page_token must be the value of next_page_token returned from the previous call to ListTasks method. The page token is valid for only 2 hours.
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// The response_view specifies which subset of the Task will be returned. By default response_view is BASIC; not all information is retrieved by default because some data, such as payloads, might be desirable to return only when needed because of its large size or because of the sensitivity of data that it contains. Authorization for FULL requires <c>cloudtasks.tasks.fullView</c> <see href="https://cloud.google.com/iam/">Google IAM</see> permission on the Task resource.
    /// </summary>
    public ResponseView2? ResponseView { get; init; }
}
