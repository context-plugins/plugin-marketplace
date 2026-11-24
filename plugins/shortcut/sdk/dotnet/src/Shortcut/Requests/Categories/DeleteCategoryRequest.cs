namespace Shortcut.Requests.Categories;

/// <summary>
/// The inputs of the DeleteCategory operation.
/// </summary>
public sealed record DeleteCategoryRequest
{
    /// <summary>
    /// The unique ID of the Category.
    /// </summary>
    public required long CategoryPublicId { get; init; }
}
