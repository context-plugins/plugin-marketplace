using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsRegionsJobsList operation.
/// </summary>
public sealed record DataprocProjectsRegionsJobsListRequest
{
    /// <summary>
    /// Required. The ID of the Google Cloud Platform project that the job belongs to.
    /// </summary>
    public required string ProjectId { get; init; }

    /// <summary>
    /// Required. The Dataproc region in which to handle the request.
    /// </summary>
    public required string Region { get; init; }

    /// <summary>
    /// Optional. If set, the returned jobs list includes only jobs that were submitted to the named cluster.
    /// </summary>
    public string? ClusterName { get; init; }

    /// <summary>
    /// Optional. A filter constraining the jobs to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where field is status.state or insertTime, or labels.[KEY], and [KEY] is a label key. value can be * to match all values. status.state can be either ACTIVE or NON_ACTIVE. Allows insertTime to be a timestamp in RFC 3339 format in double quotes, such as 2025-01-01T00:00:00Z. Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND labels.env = staging AND labels.starred = * AND insertTime &lt;= "2025-01-01T00:00:00Z"
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Optional. Specifies enumerated categories of jobs to list. (default = match ALL jobs).If filter is provided, jobStateMatcher will be ignored.
    /// </summary>
    public JobStateMatcher? JobStateMatcher { get; init; }

    /// <summary>
    /// Optional. The number of results to return in each response.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. The page token, returned by a previous call, to request the next page of results.
    /// </summary>
    public string? PageToken { get; init; }
}
