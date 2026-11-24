namespace ReadMe.Requests.Guides;

/// <summary>
/// The inputs of the GetBranchesByBranchGuidesBySlug operation.
/// </summary>
public sealed record GetBranchesByBranchGuidesBySlugRequest
{
    public required string Branch { get; init; }

    public required string Slug { get; init; }
}
