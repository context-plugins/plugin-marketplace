namespace ReadMe.Requests.Changelog;

/// <summary>
/// The inputs of the GetBranchesByBranchChangelogsBySlug operation.
/// </summary>
public sealed record GetBranchesByBranchChangelogsBySlugRequest
{
    public required string Branch { get; init; }

    public required string Slug { get; init; }
}
