namespace Bitbucket.Requests.WebhooksApi;

/// <summary>
/// The inputs of the GetWorkspacesByWorkspaceHooks operation.
/// </summary>
public sealed record GetWorkspacesByWorkspaceHooksRequest
{
    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }
}
