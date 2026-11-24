namespace Bitbucket.Requests.BranchRestrictions;

/// <summary>
/// The inputs of the GetRepositoriesByWorkspaceByRepoSlugBranchRestrictions operation.
/// </summary>
public sealed record GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsRequest
{
    /// <summary>
    /// This can either be the repository slug or the UUID of the repository,
    /// surrounded by curly-braces, for example: <c>{repository UUID}</c>.
    /// </summary>
    public required string RepoSlug { get; init; }

    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// Branch restrictions of this type
    /// </summary>
    public string? Kind { get; init; }

    /// <summary>
    /// Branch restrictions applied to branches of this pattern
    /// </summary>
    public string? Pattern { get; init; }
}
