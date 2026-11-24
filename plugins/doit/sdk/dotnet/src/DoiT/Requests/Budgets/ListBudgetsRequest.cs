namespace DoiT.Requests.Budgets;

/// <summary>
/// The inputs of the ListBudgets operation.
/// </summary>
public sealed record ListBudgetsRequest
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
    /// An expression for filtering the results of the request. The syntax is "key:[&lt;value&gt;]".
    /// Available keys: owner, budgetName, lastModified in ms (&gt;lasModified), riskStatus (one of "atRisk", "onTrack", "unknown"). Multiple filters can be connected using a pipe |. Note that using different keys in the same filter results in "AND," while using the same key multiple times in the same filter results in "OR" (except riskStatus, where only the first occurrence is honored).
    /// A budget is "atRisk" when it has already exceeded its configured amount, or its forecast projects it will exceed the configured amount before the current period ends. Budgets with no forecast data yet, a fixed budget whose period has already expired, or that are invalid/draft are classified "unknown". Filtering to riskStatus:atRisk sorts results by earliest projected breach date (day granularity) ascending instead of the default order; budgets that tie on breach day, including every already-breached budget, resolve to a fixed, repeatable order across requests rather than an arbitrary one.
    /// Because riskStatus is computed from live, periodically-refreshed budget data, paginated results filtered by riskStatus may shift between page requests if budget data refreshes mid-pagination.
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
