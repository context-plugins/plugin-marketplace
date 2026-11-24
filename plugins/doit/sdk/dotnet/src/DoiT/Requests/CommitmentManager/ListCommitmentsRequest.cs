using DoiT.Models.Enums;

namespace DoiT.Requests.CommitmentManager;

/// <summary>
/// The inputs of the ListCommitments operation.
/// </summary>
public sealed record ListCommitmentsRequest
{
    /// <summary>
    /// A field by which the results will be sorted.
    /// </summary>
    public SortByDoiTCommitmentManagerApi? SortBy { get; init; }

    /// <summary>
    /// Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for descending (highest to lowest).
    /// </summary>
    public SortOrder? SortOrder { get; init; }

    /// <summary>
    /// The maximum number of results to return in a single page. Use the page tokens to iterate through the entire collection.
    /// </summary>
    public long MaxResults { get; init; } = 50L;

    /// <summary>
    /// Page token, returned by a previous call, to request the next page of results
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// An expression for filtering the results. The syntax is <c>key:[&lt;value&gt;]</c>. Multiple filters can be connected using a pipe |. See <see href="https://developer.doit.com/docs/filters">Filters</see>.
    /// Available filter keys: <b>name</b>, <b>provider</b>
    /// </summary>
    public string? Filter { get; init; }
}
