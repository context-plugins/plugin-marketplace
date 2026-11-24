namespace ReadMe.Requests.Changelog;

/// <summary>
/// The inputs of the PutBranchesByBranchChangelogsBySlug operation.
/// </summary>
public sealed record PutBranchesByBranchChangelogsBySlugRequest
{
    public required string Branch { get; init; }

    public required string Slug { get; init; }
}
