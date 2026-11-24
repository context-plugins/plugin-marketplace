namespace ReadMe.Requests.CustomPages;

/// <summary>
/// The inputs of the PutBranchesByBranchCustomPagesBySlug operation.
/// </summary>
public sealed record PutBranchesByBranchCustomPagesBySlugRequest
{
    public required string Branch { get; init; }

    public required string Slug { get; init; }
}
