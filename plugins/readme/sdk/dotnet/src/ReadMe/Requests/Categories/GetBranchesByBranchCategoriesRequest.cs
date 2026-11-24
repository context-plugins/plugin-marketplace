namespace ReadMe.Requests.Categories;

/// <summary>
/// The inputs of the GetBranchesByBranchCategories operation.
/// </summary>
public sealed record GetBranchesByBranchCategoriesRequest
{
    public required string Branch { get; init; }
}
