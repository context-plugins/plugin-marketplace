using Shortcut.Models;

namespace Shortcut.Requests.Categories;

/// <summary>
/// The inputs of the CreateCategory operation.
/// </summary>
public sealed record CreateCategoryRequest
{
    public required CreateCategory Body { get; init; }
}
