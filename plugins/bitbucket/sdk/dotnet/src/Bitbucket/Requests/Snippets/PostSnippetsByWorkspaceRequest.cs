using Bitbucket.Models.AllOf;

namespace Bitbucket.Requests.Snippets;

/// <summary>
/// The inputs of the PostSnippetsByWorkspace operation.
/// </summary>
public sealed record PostSnippetsByWorkspaceRequest
{
    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// The new snippet object.
    /// </summary>
    public required Snippet Body { get; init; }
}
