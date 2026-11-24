namespace DopeSecurity.Requests.CustomCategoriesApi;

/// <summary>
/// The inputs of the DeleteCustomCategory operation.
/// </summary>
public sealed record DeleteCustomCategoryRequest
{
    /// <summary>
    /// The name of the custom category to delete
    /// </summary>
    public required string CustomCategoryName { get; init; }
}
