namespace Bitbucket.Requests.Projects;

/// <summary>
/// The inputs of the DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserId operation.
/// </summary>
public sealed record DeleteWorkspacesByWorkspaceProjectsByProjectKeyPermissionsConfigUsersBySelectedUserIdRequest
{
    /// <summary>
    /// The project in question. This is the actual key assigned to the project.
    /// </summary>
    public required string ProjectKey { get; init; }

    /// <summary>
    /// This can either be the username, the user's UUID surrounded by curly-braces,
    /// for example: {account UUID}, or the user's Atlassian ID.
    /// </summary>
    public required string SelectedUserId { get; init; }

    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }
}
