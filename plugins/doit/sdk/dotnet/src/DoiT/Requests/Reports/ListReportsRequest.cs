namespace DoiT.Requests.Reports;

/// <summary>
/// The inputs of the ListReports operation.
/// </summary>
public sealed record ListReportsRequest
{
    /// <summary>
    /// The maximum number of results to return in a single page. Use the page tokens to iterate through the entire collection.
    /// </summary>
    public long MaxResults { get; init; } = 50L;

    /// <summary>
    /// Page token, returned by a previous call, to request the next page of results
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// An expression for filtering the results.
    /// The syntax is <c>key:[&lt;value&gt;]</c>. Multiple filters can be connected using a pipe |. See <see href="https://developer.doit.com/docs/filters">Filters</see>.
    /// Possible filter keys: <b>reportName</b>, <b>owner</b>, <b>type</b>, <b>updateTime</b>, <b>folderId</b>
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Case-insensitive substring match against the resource name. Combined with the "filter" parameter using AND semantics.
    /// </summary>
    public string? NameContains { get; init; }

    /// <summary>
    /// Min value for reports creation time, in milliseconds since the POSIX epoch. If set, only reports created after or at this timestamp are returned.
    /// </summary>
    public string? MinCreationTime { get; init; }

    /// <summary>
    /// Max value for reports creation time, in milliseconds since the POSIX epoch. If set, only reports created before or at this timestamp are returned.
    /// </summary>
    public string? MaxCreationTime { get; init; }
}
