namespace Bitbucket.Requests.Workspaces;

/// <summary>
/// The inputs of the GetWorkspacesByWorkspacePermissions operation.
/// </summary>
public sealed record GetWorkspacesByWorkspacePermissionsRequest
{
    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// Query string to narrow down the response as per
    /// <see href="/cloud/bitbucket/rest/intro/#filtering">filtering and sorting</see>.
    /// </summary>
    public string? Q { get; init; }
}
