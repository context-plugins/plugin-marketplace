namespace Bitbucket.Requests.Workspaces;

/// <summary>
/// The inputs of the GetUserWorkspaces operation.
/// </summary>
public sealed record GetUserWorkspacesRequest
{
    /// <summary>
    /// Name of a response property to sort results (only slug is supported).
    /// </summary>
    public string? Sort { get; init; }

    /// <summary>
    /// Filter workspaces based on which ones the caller has admin permissions or not.
    /// </summary>
    public bool? Administrator { get; init; }
}
