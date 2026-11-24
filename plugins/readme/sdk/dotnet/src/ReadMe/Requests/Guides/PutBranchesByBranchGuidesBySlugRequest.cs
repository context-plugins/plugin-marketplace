namespace ReadMe.Requests.Guides;

/// <summary>
/// The inputs of the PutBranchesByBranchGuidesBySlug operation.
/// </summary>
public sealed record PutBranchesByBranchGuidesBySlugRequest
{
    public required string Branch { get; init; }

    public required string Slug { get; init; }
}
