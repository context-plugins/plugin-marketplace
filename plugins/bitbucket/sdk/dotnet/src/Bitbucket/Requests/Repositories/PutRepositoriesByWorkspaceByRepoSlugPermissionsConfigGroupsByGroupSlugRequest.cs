using Bitbucket.Models;

namespace Bitbucket.Requests.Repositories;

/// <summary>
/// The inputs of the PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlug operation.
/// </summary>
public sealed record PutRepositoriesByWorkspaceByRepoSlugPermissionsConfigGroupsByGroupSlugRequest
{
    /// <summary>
    /// Slug of the requested group.
    /// </summary>
    public required string GroupSlug { get; init; }

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
    /// The permission to grant
    /// </summary>
    public required BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema Body { get; init; }
}
