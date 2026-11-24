using Instacart.Models;

namespace Instacart.Requests.Products;

/// <summary>
/// The inputs of the CreateRecipePage operation.
/// </summary>
public sealed record CreateRecipePageRequest
{
    public required RecipeRequest Body { get; init; }
}
