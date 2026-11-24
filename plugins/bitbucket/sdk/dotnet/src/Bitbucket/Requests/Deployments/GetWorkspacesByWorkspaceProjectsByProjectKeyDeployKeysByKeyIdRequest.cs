namespace Bitbucket.Requests.Deployments;

/// <summary>
/// The inputs of the GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyId operation.
/// </summary>
public sealed record GetWorkspacesByWorkspaceProjectsByProjectKeyDeployKeysByKeyIdRequest
{
    /// <summary>
    /// The key ID matching the project deploy key.
    /// </summary>
    public required string KeyId { get; init; }

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
}
