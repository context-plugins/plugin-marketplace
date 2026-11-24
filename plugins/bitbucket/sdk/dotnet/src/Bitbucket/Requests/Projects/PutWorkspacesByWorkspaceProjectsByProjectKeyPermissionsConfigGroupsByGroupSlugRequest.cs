using Bitbucket.Models;

namespace Bitbucket.Requests.Projects;

/// <summary>
/// The inputs of the PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlug operation.
/// </summary>
public sealed record PutWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigGroupsByGroupSlugRequest
{
    /// <summary>
    /// Slug of the requested group.
    /// </summary>
    public required string GroupSlug { get; init; }

    /// <summary>
    /// The project in question. This is the actual key assigned to the project.
    /// </summary>
    public required string ProjectKey { get; init; }

    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// The permission to grant
    /// </summary>
    public required BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema Body { get; init; }
}
