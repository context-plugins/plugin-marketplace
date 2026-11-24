using Perigon.Core.Validation.Attributes;

namespace Perigon.Requests.SupplementalEndpoints;

/// <summary>
/// The inputs of the SearchTopics operation.
/// </summary>
public sealed record SearchTopicsRequest
{
    /// <summary>
    /// String. Search for topics by exact name or partial text match. Does not support wildcards. Examples include Markets, Cryptocurrency, Climate Change, etc.
    /// </summary>
    public string? Name { get; init; }

    /// <summary>
    /// String. Filter topics by broad article categories such as Politics, Tech, Sports, Business, Finance, Entertainment, etc.
    /// </summary>
    public string? Category { get; init; }

    /// <summary>
    /// String. Filter topics by their specific subcategory. Subcategories provide more granular classification beyond the main category, such as TV or Event.
    /// </summary>
    public string? Subcategory { get; init; }

    /// <summary>
    /// Integer. The specific page of results to retrieve in the paginated response. Starts at 0.
    /// </summary>
    [Minimum(0)]
    public int? Page { get; init; }

    /// <summary>
    /// Integer. The number of topics to return per page in the paginated response.
    /// </summary>
    [Minimum(0)]
    public int? Size { get; init; }
}
