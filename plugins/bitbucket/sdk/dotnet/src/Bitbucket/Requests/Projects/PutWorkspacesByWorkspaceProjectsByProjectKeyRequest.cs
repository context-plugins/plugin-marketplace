using Bitbucket.Models.AllOf;

namespace Bitbucket.Requests.Projects;

/// <summary>
/// The inputs of the PutWorkspacesByWorkspaceProjectsByProjectKey operation.
/// </summary>
public sealed record PutWorkspacesByWorkspaceProjectsByProjectKeyRequest
{
    /// <summary>
    /// The project in question. This is the actual <c>key</c> assigned
    /// to the project.
    /// </summary>
    public required string ProjectKey { get; init; }

    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }

    public required ProjectBitbucketProjectsApi Body { get; init; }
}
