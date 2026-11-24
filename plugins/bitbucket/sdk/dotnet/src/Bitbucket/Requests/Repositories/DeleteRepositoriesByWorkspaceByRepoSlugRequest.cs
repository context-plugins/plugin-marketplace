namespace Bitbucket.Requests.Repositories;

/// <summary>
/// The inputs of the DeleteRepositoriesByWorkspaceByRepoSlug operation.
/// </summary>
public sealed record DeleteRepositoriesByWorkspaceByRepoSlugRequest
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
    /// If a repository has been moved to a new location, use this parameter to
    /// show users a friendly message in the Bitbucket UI that the repository
    /// has moved to a new location. However, a GET to this endpoint will still
    /// return a 404.
    /// </summary>
    public string? RedirectTo { get; init; }
}
