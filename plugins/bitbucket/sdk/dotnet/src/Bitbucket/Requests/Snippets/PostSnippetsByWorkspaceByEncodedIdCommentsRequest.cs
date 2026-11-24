using Bitbucket.Models.AllOf;

namespace Bitbucket.Requests.Snippets;

/// <summary>
/// The inputs of the PostSnippetsByWorkspaceByEncodedIdComments operation.
/// </summary>
public sealed record PostSnippetsByWorkspaceByEncodedIdCommentsRequest
{
    /// <summary>
    /// The snippet id.
    /// </summary>
    public required string EncodedId { get; init; }

    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// The contents of the new comment.
    /// </summary>
    public required SnippetComment Body { get; init; }
}
