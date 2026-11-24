using Shortcut.Models;

namespace Shortcut.Requests.Categories;

/// <summary>
/// The inputs of the UpdateCategory operation.
/// </summary>
public sealed record UpdateCategoryRequest
{
    /// <summary>
    /// The unique ID of the Category you wish to update.
    /// </summary>
    public required long CategoryPublicId { get; init; }

    public required UpdateCategory Body { get; init; }
}
