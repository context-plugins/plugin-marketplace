namespace Shortcut.Requests.Categories;

/// <summary>
/// The inputs of the ListCategoryMilestones operation.
/// </summary>
public sealed record ListCategoryMilestonesRequest
{
    /// <summary>
    /// The unique ID of the Category.
    /// </summary>
    public required long CategoryPublicId { get; init; }
}
