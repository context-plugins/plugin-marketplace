using Bitbucket.Models.AllOf;

namespace Bitbucket.Requests.Snippets;

/// <summary>
/// The inputs of the PostSnippets operation.
/// </summary>
public sealed record PostSnippetsRequest
{
    /// <summary>
    /// The new snippet object.
    /// </summary>
    public required Snippet Body { get; init; }
}
