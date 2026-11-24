namespace ReadMe.Requests.Recipes;

/// <summary>
/// The inputs of the PutRecipesBySlug operation.
/// </summary>
public sealed record PutRecipesBySlugRequest
{
    public required string Slug { get; init; }
}
