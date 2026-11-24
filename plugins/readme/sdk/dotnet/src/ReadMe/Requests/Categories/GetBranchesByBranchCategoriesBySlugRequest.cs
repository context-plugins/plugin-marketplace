namespace ReadMe.Requests.Categories;

/// <summary>
/// The inputs of the GetBranchesByBranchCategoriesBySlug operation.
/// </summary>
public sealed record GetBranchesByBranchCategoriesBySlugRequest
{
    public required string Branch { get; init; }

    public required string Slug { get; init; }
}
