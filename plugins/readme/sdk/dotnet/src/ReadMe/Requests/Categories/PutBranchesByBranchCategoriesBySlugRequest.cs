namespace ReadMe.Requests.Categories;

/// <summary>
/// The inputs of the PutBranchesByBranchCategoriesBySlug operation.
/// </summary>
public sealed record PutBranchesByBranchCategoriesBySlugRequest
{
    public required string Branch { get; init; }

    public required string Slug { get; init; }
}
