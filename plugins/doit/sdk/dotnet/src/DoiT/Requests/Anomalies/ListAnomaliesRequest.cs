using DoiT.Models.Enums;

namespace DoiT.Requests.Anomalies;

/// <summary>
/// The inputs of the ListAnomalies operation.
/// </summary>
public sealed record ListAnomaliesRequest
{
    /// <summary>
    /// Inclusive lower bound on the anomaly's usage start time, in milliseconds since the POSIX epoch. Despite the name, this filters the anomaly's usage start time, not the time the anomaly document was created.
    /// </summary>
    public long? MinCreationTime { get; init; }

    /// <summary>
    /// Inclusive upper bound on the anomaly's usage start time, in milliseconds since the POSIX epoch. Despite the name, this filters the anomaly's usage start time, not the time the anomaly document was created.
    /// </summary>
    public long? MaxCreationTime { get; init; }

    /// <summary>
    /// An expression for filtering the results. The syntax is <c>key:value</c>. Multiple criteria can be combined using a pipe |. See <see href="https://developer.doit.com/docs/filters">Filters</see>.
    /// Available filter keys: <b>serviceName</b>, <b>billingAccount</b>, <b>platform</b>, <b>severityLevel</b>. <c>severityLevel</c> values must be lowercase: <c>information</c>, <c>warning</c>, <c>critical</c>. An unrecognised key, or a segment that is not <c>key:value</c>, is rejected with <c>400</c> rather than ignored.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// A field by which the results will be sorted. Defaults to <c>startTime</c>.
    /// </summary>
    public SortByDoiTAnomaliesApi SortBy { get; init; } = SortByDoiTAnomaliesApi.StartTime;

    /// <summary>
    /// Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for descending (highest to lowest).
    /// </summary>
    public SortOrder? SortOrder { get; init; }

    /// <summary>
    /// The maximum number of results to return in a single page. If omitted, all anomalies matching the filters and time window are returned in a single page.
    /// </summary>
    public long? MaxResults { get; init; }

    /// <summary>
    /// Page token, returned by a previous call, to request the next page of results
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// Include anomaly notifications from the subcollection. Defaults to false.
    /// </summary>
    public bool IncludeNotifications { get; init; } = false;
}
