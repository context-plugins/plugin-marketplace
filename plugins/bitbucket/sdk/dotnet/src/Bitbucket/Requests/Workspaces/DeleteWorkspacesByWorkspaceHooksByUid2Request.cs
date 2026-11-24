namespace Bitbucket.Requests.Workspaces;

/// <summary>
/// The inputs of the DeleteWorkspacesByWorkspaceHooksByUid2 operation.
/// </summary>
public sealed record DeleteWorkspacesByWorkspaceHooksByUid2Request
{
    /// <summary>
    /// Installed webhook's ID
    /// </summary>
    public required string Uid { get; init; }

    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }
}
