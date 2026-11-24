namespace ReadMe.Requests.Recipes;

/// <summary>
/// The inputs of the GetRecipesBySlug operation.
/// </summary>
public sealed record GetRecipesBySlugRequest
{
    public required string Slug { get; init; }
}
