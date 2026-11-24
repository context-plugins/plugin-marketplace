using Bitbucket.Models.AllOf;

namespace Bitbucket.Requests.CommitStatuses;

/// <summary>
/// The inputs of the PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKey operation.
/// </summary>
public sealed record PutRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesBuildByKeyRequest
{
    /// <summary>
    /// The commit's SHA1.
    /// </summary>
    public required string Commit { get; init; }

    /// <summary>
    /// The build status' unique key
    /// </summary>
    public required string Key { get; init; }

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
    /// The updated build status object
    /// </summary>
    public Commitstatus? Body { get; init; }
}
