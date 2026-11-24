namespace DopeSecurity.Requests.CustomCategoriesApi;

/// <summary>
/// The inputs of the DeleteCustomCategoryUrl operation.
/// </summary>
public sealed record DeleteCustomCategoryUrlRequest
{
    /// <summary>
    /// The name of the custom category to delete given URL from
    /// </summary>
    public required string CustomCategoryName { get; init; }

    /// <summary>
    /// The URL to be deleted (Ensure that URLs are properly URL-encoded using
    /// the UTF8 encoding method)
    /// </summary>
    public required string EncodedUrl { get; init; }
}
