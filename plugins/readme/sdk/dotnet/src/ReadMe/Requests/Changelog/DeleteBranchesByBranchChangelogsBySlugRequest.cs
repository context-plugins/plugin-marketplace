namespace ReadMe.Requests.Changelog;

/// <summary>
/// The inputs of the DeleteBranchesByBranchChangelogsBySlug operation.
/// </summary>
public sealed record DeleteBranchesByBranchChangelogsBySlugRequest
{
    public required string Branch { get; init; }

    public required string Slug { get; init; }
}
