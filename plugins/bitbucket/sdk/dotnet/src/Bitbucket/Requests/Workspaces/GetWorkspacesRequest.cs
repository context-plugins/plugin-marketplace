using Bitbucket.Models.Enums;

namespace Bitbucket.Requests.Workspaces;

/// <summary>
/// The inputs of the GetWorkspaces operation.
/// </summary>
public sealed record GetWorkspacesRequest
{
    /// <summary>
    /// Filters the workspaces based on the authenticated user's role on each workspace.
    /// <para>
    ///             * <b>member</b>: returns a list of all the workspaces which the caller is a member of
    ///                 at least one workspace group or repository
    ///             * <b>collaborator</b>: returns a list of workspaces which the caller has write access
    ///                 to at least one repository in the workspace
    ///             * <b>owner</b>: returns a list of workspaces which the caller has administrator access
    /// </para>
    /// </summary>
    public Role1BitbucketWorkspacesApi? Role { get; init; }

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
