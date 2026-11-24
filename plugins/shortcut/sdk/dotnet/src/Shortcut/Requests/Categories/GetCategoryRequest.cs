namespace Shortcut.Requests.Categories;

/// <summary>
/// The inputs of the GetCategory operation.
/// </summary>
public sealed record GetCategoryRequest
{
    /// <summary>
    /// The unique ID of the Category.
    /// </summary>
    public required long CategoryPublicId { get; init; }
}
