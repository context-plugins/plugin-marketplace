using Bitbucket.Models.AllOf;

namespace Bitbucket.Requests.Repositories;

/// <summary>
/// The inputs of the PostRepositoriesByWorkspaceByRepoSlug operation.
/// </summary>
public sealed record PostRepositoriesByWorkspaceByRepoSlugRequest
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
    /// The repository that is to be created. Note that most object elements are optional. Elements "owner" and "full_name" are ignored as the URL implies them.
    /// </summary>
    public RepositoryBitbucketRepositoriesApi? Body { get; init; }
}
