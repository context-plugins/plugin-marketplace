using DopeSecurity.Models;

namespace DopeSecurity.Requests.CustomCategoriesApi;

/// <summary>
/// The inputs of the AddCustomCategoryUrls operation.
/// </summary>
public sealed record AddCustomCategoryUrlsRequest
{
    /// <summary>
    /// The name of the custom category to add URLs to
    /// </summary>
    public required string CustomCategoryName { get; init; }

    public required CustomCategoriesUrlsRequest Body { get; init; }
}
