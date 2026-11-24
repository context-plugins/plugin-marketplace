using DoiT.Models.Enums;

namespace DoiT.Requests.Dimensions;

/// <summary>
/// The inputs of the ListDimensions operation.
/// </summary>
public sealed record ListDimensionsRequest
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
    /// The fields eligible for filtering are: type, label, key.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// A field by which the results will be sorted. <c>key</c> is an alias for the dimension <c>id</c>. Defaults to <c>id</c> in descending order.
    /// </summary>
    public SortByDoiTDimensionsApi SortBy { get; init; } = SortByDoiTDimensionsApi.Id;

    /// <summary>
    /// Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for descending (highest to lowest).
    /// </summary>
    public SortOrder? SortOrder { get; init; }
}
