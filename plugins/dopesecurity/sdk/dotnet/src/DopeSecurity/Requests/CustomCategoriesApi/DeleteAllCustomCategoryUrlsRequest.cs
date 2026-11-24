namespace DopeSecurity.Requests.CustomCategoriesApi;

/// <summary>
/// The inputs of the DeleteAllCustomCategoryUrls operation.
/// </summary>
public sealed record DeleteAllCustomCategoryUrlsRequest
{
    /// <summary>
    /// The name of the custom category to delete all URLs from
    /// </summary>
    public required string CustomCategoryName { get; init; }
}
