namespace DoiT.Requests.CloudIncidents;

/// <summary>
/// The inputs of the ListKnownIssues operation.
/// </summary>
public sealed record ListKnownIssuesRequest
{
    /// <summary>
    /// The maximum number of results to return in a single page. Leverage the page tokens to iterate through the entire collection.
    /// </summary>
    public long MaxResults { get; init; } = 50L;

    /// <summary>
    /// Page token, returned by a previous call, to request the next page of results
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// An expression for filtering the results. The syntax is <c>key:[&lt;value&gt;]</c>. Multiple filters can be connected using a pipe |. See <see href="https://developer.doit.com/docs/filters">Filters</see>.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Min value for the cloud incident creation time, in milliseconds since the POSIX epoch. If set, only cloud incidents created after or at this timestamp are returned.
    /// </summary>
    public string? MinCreationTime { get; init; }

    /// <summary>
    /// Max value for the cloud incident creation time, in milliseconds since the POSIX epoch. If set, only cloud incidents created before or at this
    /// timestamp are returned.
    /// </summary>
    public string? MaxCreationTime { get; init; }
}
