using Bitbucket.Models.AllOf;

namespace Bitbucket.Requests.Projects;

/// <summary>
/// The inputs of the PostWorkspacesByWorkspaceProjects operation.
/// </summary>
public sealed record PostWorkspacesByWorkspaceProjectsRequest
{
    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }

    public required ProjectBitbucketProjectsApi Body { get; init; }
}
