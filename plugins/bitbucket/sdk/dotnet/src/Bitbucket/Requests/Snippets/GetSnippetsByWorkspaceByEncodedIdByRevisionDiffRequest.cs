namespace Bitbucket.Requests.Snippets;

/// <summary>
/// The inputs of the GetSnippetsByWorkspaceByEncodedIdByRevisionDiff operation.
/// </summary>
public sealed record GetSnippetsByWorkspaceByEncodedIdByRevisionDiffRequest
{
    /// <summary>
    /// The snippet id.
    /// </summary>
    public required string EncodedId { get; init; }

    /// <summary>
    /// A revspec expression. This can simply be a commit SHA1, a ref name, or a compare expression like <c>staging..production</c>.
    /// </summary>
    public required string Revision { get; init; }

    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// When used, only one the diff of the specified file will be returned.
    /// </summary>
    public string? Path { get; init; }
}
