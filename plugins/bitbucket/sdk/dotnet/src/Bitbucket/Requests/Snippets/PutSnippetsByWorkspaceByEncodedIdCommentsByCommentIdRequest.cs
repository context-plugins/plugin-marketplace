using Bitbucket.Models.AllOf;

namespace Bitbucket.Requests.Snippets;

/// <summary>
/// The inputs of the PutSnippetsByWorkspaceByEncodedIdCommentsByCommentId operation.
/// </summary>
public sealed record PutSnippetsByWorkspaceByEncodedIdCommentsByCommentIdRequest
{
    /// <summary>
    /// The id of the comment.
    /// </summary>
    public required long CommentId { get; init; }

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
    /// The contents to update the comment to.
    /// </summary>
    public required SnippetComment Body { get; init; }
}
