namespace ReadMe.Requests.Categories;

/// <summary>
/// The inputs of the DeleteBranchesByBranchCategoriesBySlug operation.
/// </summary>
public sealed record DeleteBranchesByBranchCategoriesBySlugRequest
{
    public required string Branch { get; init; }

    public required string Slug { get; init; }
}
