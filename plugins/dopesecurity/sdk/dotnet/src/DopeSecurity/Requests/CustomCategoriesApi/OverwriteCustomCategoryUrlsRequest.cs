using DopeSecurity.Models;

namespace DopeSecurity.Requests.CustomCategoriesApi;

/// <summary>
/// The inputs of the OverwriteCustomCategoryUrls operation.
/// </summary>
public sealed record OverwriteCustomCategoryUrlsRequest
{
    /// <summary>
    /// The name of the custom category to overwrite URLs for
    /// </summary>
    public required string CustomCategoryName { get; init; }

    public required CustomCategoriesUrlsRequest Body { get; init; }
}
