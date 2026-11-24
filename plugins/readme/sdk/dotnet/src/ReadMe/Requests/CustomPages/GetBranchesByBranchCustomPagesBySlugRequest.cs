namespace ReadMe.Requests.CustomPages;

/// <summary>
/// The inputs of the GetBranchesByBranchCustomPagesBySlug operation.
/// </summary>
public sealed record GetBranchesByBranchCustomPagesBySlugRequest
{
    public required string Branch { get; init; }

    public required string Slug { get; init; }
}
