namespace Bitbucket.Requests.Projects;

/// <summary>
/// The inputs of the PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUser operation.
/// </summary>
public sealed record PutWorkspacesByWorkspaceProjectsByProjectKeyDefaultReviewersBySelectedUserRequest
{
    /// <summary>
    /// The project in question. This can either be the actual <c>key</c> assigned
    /// to the project or the <c>UUID</c> (surrounded by curly-braces (<c>{}</c>)).
    /// </summary>
    public required string ProjectKey { get; init; }

    /// <summary>
    /// This can either be the username or the UUID of the default reviewer,
    /// surrounded by curly-braces, for example: <c>{account UUID}</c>.
    /// </summary>
    public required string SelectedUser { get; init; }

    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }
}
