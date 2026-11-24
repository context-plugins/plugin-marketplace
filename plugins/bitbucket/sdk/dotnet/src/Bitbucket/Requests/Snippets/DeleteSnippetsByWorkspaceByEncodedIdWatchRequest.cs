namespace Bitbucket.Requests.Snippets;

/// <summary>
/// The inputs of the DeleteSnippetsByWorkspaceByEncodedIdWatch operation.
/// </summary>
public sealed record DeleteSnippetsByWorkspaceByEncodedIdWatchRequest
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
}
