namespace ReadMe.Requests.CustomPages;

/// <summary>
/// The inputs of the DeleteBranchesByBranchCustomPagesBySlug operation.
/// </summary>
public sealed record DeleteBranchesByBranchCustomPagesBySlugRequest
{
    public required string Branch { get; init; }

    public required string Slug { get; init; }
}
