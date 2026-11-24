using Bitbucket.Models;

namespace Bitbucket.Requests.Repositories;

/// <summary>
/// The inputs of the PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserId operation.
/// </summary>
public sealed record PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigUsersBySelectedUserIdRequest
{
    /// <summary>
    /// This can either be the repository slug or the UUID of the repository,
    /// surrounded by curly-braces, for example: <c>{repository UUID}</c>.
    /// </summary>
    public required string RepoSlug { get; init; }

    /// <summary>
    /// This can either be the UUID of the account, surrounded by curly-braces, for
    /// example: <c>{account UUID}</c>, OR an Atlassian Account ID.
    /// </summary>
    public required string SelectedUserId { get; init; }

    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// The permission to grant
    /// </summary>
    public required BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema Body { get; init; }
}
