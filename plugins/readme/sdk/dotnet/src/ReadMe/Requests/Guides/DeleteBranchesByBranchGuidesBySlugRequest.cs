namespace ReadMe.Requests.Guides;

/// <summary>
/// The inputs of the DeleteBranchesByBranchGuidesBySlug operation.
/// </summary>
public sealed record DeleteBranchesByBranchGuidesBySlugRequest
{
    public required string Branch { get; init; }

    public required string Slug { get; init; }
}
