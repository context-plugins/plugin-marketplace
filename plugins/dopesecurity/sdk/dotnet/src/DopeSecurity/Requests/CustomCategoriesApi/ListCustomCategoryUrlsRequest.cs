namespace DopeSecurity.Requests.CustomCategoriesApi;

/// <summary>
/// The inputs of the ListCustomCategoryUrls operation.
/// </summary>
public sealed record ListCustomCategoryUrlsRequest
{
    /// <summary>
    /// The name of the custom category to get URLs from
    /// </summary>
    public required string CustomCategoryName { get; init; }
}
