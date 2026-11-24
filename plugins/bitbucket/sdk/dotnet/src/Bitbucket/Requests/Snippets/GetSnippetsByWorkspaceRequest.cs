using Bitbucket.Models.Enums;

namespace Bitbucket.Requests.Snippets;

/// <summary>
/// The inputs of the GetSnippetsByWorkspace operation.
/// </summary>
public sealed record GetSnippetsByWorkspaceRequest
{
    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// Filter down the result based on the authenticated user's role (<c>owner</c>, <c>contributor</c>, or <c>member</c>).
    /// </summary>
    public RoleBitbucketSnippetsApi? Role { get; init; }
}
