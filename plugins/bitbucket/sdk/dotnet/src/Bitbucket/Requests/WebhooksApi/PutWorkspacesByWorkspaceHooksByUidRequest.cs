namespace Bitbucket.Requests.WebhooksApi;

/// <summary>
/// The inputs of the PutWorkspacesByWorkspaceHooksByUid operation.
/// </summary>
public sealed record PutWorkspacesByWorkspaceHooksByUidRequest
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
