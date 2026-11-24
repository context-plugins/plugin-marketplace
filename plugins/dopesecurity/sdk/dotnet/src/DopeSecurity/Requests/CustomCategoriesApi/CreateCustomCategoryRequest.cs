using System.ComponentModel.DataAnnotations;

namespace DopeSecurity.Requests.CustomCategoriesApi;

/// <summary>
/// The inputs of the CreateCustomCategory operation.
/// </summary>
public sealed record CreateCustomCategoryRequest
{
    /// <summary>
    /// The name of the custom category to create
    /// </summary>
    [StringLength(32, MinimumLength = 1)]
    [RegularExpression("^[^#!@$%^*?./\\\\]+$")]
    public required string CustomCategoryName { get; init; }
}
