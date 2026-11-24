using CodeQr.Core.Validation.Attributes;
using CodeQr.Models.AnyOf;
using CodeQr.Models.Enums;

namespace CodeQr.Requests.Tags;

/// <summary>
/// The inputs of the GetTags operation.
/// </summary>
public sealed record GetTagsRequest
{
    /// <summary>
    /// The field to sort the tags by.
    /// </summary>
    public SortByCodeqrIoTagsApi SortBy { get; init; } = SortByCodeqrIoTagsApi.Name;

    /// <summary>
    /// The order to sort the tags by.
    /// </summary>
    public SortOrder SortOrder { get; init; } = SortOrder.Asc;

    /// <summary>
    /// The search term to filter the tags by.
    /// </summary>
    public string? Search { get; init; }

    /// <summary>
    /// IDs of tags to filter by.
    /// </summary>
    public Ids? Ids { get; init; }

    /// <summary>
    /// The page number for pagination.
    /// </summary>
    [ExclusiveMinimum(0)]
    public double Page { get; init; } = 1d;

    /// <summary>
    /// The number of items per page.
    /// </summary>
    [Maximum(100.0)]
    [ExclusiveMinimum(0)]
    public double PageSize { get; init; } = 100d;
}
