namespace Bitbucket.Requests.BranchRestrictions;

/// <summary>
/// The inputs of the GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsById operation.
/// </summary>
public sealed record GetRepositoriesByWorkspaceByRepoSlugBranchRestrictionsByIdRequest
{
    /// <summary>
    /// The restriction rule's id
    /// </summary>
    public required string Id { get; init; }

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
}
