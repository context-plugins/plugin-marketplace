namespace GoogleCloudTasks.Requests;

/// <summary>
/// The inputs of the CloudtasksProjectsLocationsQueuesList operation.
/// </summary>
public sealed record CloudtasksProjectsLocationsQueuesListRequest
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
    /// <c>filter</c> can be used to specify a subset of queues. Any Queue field can be used as a filter and several operators as supported. For example: <c>&lt;=, &lt;, &gt;=, &gt;, !=, =, :</c>. The filter syntax is the same as described in <see href="https://cloud.google.com/logging/docs/view/advanced_filters">Stackdriver's Advanced Logs Filters</see>. Sample filter "state: PAUSED". Note that using filters might cause fewer queues than the requested page_size to be returned.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Requested page size. The maximum page size is 9800. If unspecified, the page size will be the maximum. Fewer queues than requested might be returned, even if more queues exist; use the next_page_token in the response to determine if more queues exist.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// A token identifying the page of results to return. To request the first page results, page_token must be empty. To request the next page of results, page_token must be the value of next_page_token returned from the previous call to ListQueues method. It is an error to switch the value of the filter while iterating through pages.
    /// </summary>
    public string? PageToken { get; init; }
}
