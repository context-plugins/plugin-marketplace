namespace ReadMe.Requests.Recipes;

/// <summary>
/// The inputs of the DeleteRecipesBySlug operation.
/// </summary>
public sealed record DeleteRecipesBySlugRequest
{
    public required string Slug { get; init; }
}
