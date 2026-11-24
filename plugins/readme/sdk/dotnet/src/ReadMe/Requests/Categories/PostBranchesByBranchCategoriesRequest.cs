namespace ReadMe.Requests.Categories;

/// <summary>
/// The inputs of the PostBranchesByBranchCategories operation.
/// </summary>
public sealed record PostBranchesByBranchCategoriesRequest
{
    public required string Branch { get; init; }
}
