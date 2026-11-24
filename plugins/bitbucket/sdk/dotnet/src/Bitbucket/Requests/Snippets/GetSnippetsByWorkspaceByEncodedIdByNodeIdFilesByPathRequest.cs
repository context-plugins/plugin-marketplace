namespace Bitbucket.Requests.Snippets;

/// <summary>
/// The inputs of the GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPath operation.
/// </summary>
public sealed record GetSnippetsByWorkspaceByEncodedIdByNodeIdFilesByPathRequest
{
    /// <summary>
    /// The snippet id.
    /// </summary>
    public required string EncodedId { get; init; }

    /// <summary>
    /// A commit revision (SHA1).
    /// </summary>
    public required string NodeId { get; init; }

    /// <summary>
    /// Path to the file.
    /// </summary>
    public required string Path { get; init; }

    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }
}
