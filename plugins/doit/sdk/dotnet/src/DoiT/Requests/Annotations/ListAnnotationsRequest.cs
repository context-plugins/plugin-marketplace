using DoiT.Models.Enums;

namespace DoiT.Requests.Annotations;

/// <summary>
/// The inputs of the ListAnnotations operation.
/// </summary>
public sealed record ListAnnotationsRequest
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
    /// Valid fields: <b>content</b>, <b>timestamp</b>, <b>labels</b>.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// A field by which the results will be sorted.
    /// </summary>
    public SortByDoiTAnnotationsApi? SortBy { get; init; }

    /// <summary>
    /// Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for descending (highest to lowest).
    /// </summary>
    public SortOrder? SortOrder { get; init; }
}
