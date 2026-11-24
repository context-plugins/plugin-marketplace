namespace Bitbucket.Requests.Workspaces;

/// <summary>
/// The inputs of the GetUserPermissionsWorkspaces operation.
/// </summary>
public sealed record GetUserPermissionsWorkspacesRequest
{
    /// <summary>
    /// Query string to narrow down the response. See
    /// <see href="/cloud/bitbucket/rest/intro/#filtering">filtering and sorting</see> for details.
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// Name of a response property to sort results. See
    /// <see href="/cloud/bitbucket/rest/intro/#sorting-query-results">filtering and sorting</see>
    /// for details.
    /// </summary>
    public string? Sort { get; init; }
}
