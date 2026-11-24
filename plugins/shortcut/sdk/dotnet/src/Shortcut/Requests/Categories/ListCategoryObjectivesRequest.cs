namespace Shortcut.Requests.Categories;

/// <summary>
/// The inputs of the ListCategoryObjectives operation.
/// </summary>
public sealed record ListCategoryObjectivesRequest
{
    /// <summary>
    /// The unique ID of the Category.
    /// </summary>
    public required long CategoryPublicId { get; init; }
}
