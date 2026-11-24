using Bitbucket.Models.Enums;

namespace Bitbucket.Requests.Source;

/// <summary>
/// The inputs of the GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2 operation.
/// </summary>
public sealed record GetRepositoriesByWorkspaceByRepoSlugSrcByCommitByPath2Request
{
    /// <summary>
    /// The commit's SHA1.
    /// </summary>
    public required string Commit { get; init; }

    /// <summary>
    /// Path to the file.
    /// </summary>
    public required string Path { get; init; }

    /// <summary>
    /// This can either be the repository slug or the UUID of the repository,
    /// surrounded by curly-braces, for example: <c>{repository UUID}</c>.
    /// </summary>
    public required string RepoSlug { get; init; }

    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// If 'meta' is provided, returns the (json) meta data for the contents of the file.  If 'rendered' is provided, returns the contents of a non-binary file in HTML-formatted rendered markup. The 'rendered' option only supports these filetypes: <c>.md</c>, <c>.markdown</c>, <c>.mkd</c>, <c>.mkdn</c>, <c>.mdown</c>, <c>.text</c>, <c>.rst</c>, and <c>.textile</c>. Since Git does not generally track what text encoding scheme is used, this endpoint attempts to detect the most appropriate character encoding. While usually correct, determining the character encoding can be ambiguous which in exceptional cases can lead to misinterpretation of the characters. As such, the raw element in the response object should not be treated as equivalent to the file's actual contents.
    /// </summary>
    public Format1? Format { get; init; }

    /// <summary>
    /// Optional filter expression as per <see href="/cloud/bitbucket/rest/intro/#filtering">filtering and sorting</see>.
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// Optional sorting parameter as per <see href="/cloud/bitbucket/rest/intro/#sorting-query-results">filtering and sorting</see>.
    /// </summary>
    public string? Sort { get; init; }

    /// <summary>
    /// If provided, returns the contents of the repository and its subdirectories recursively until the specified max_depth of nested directories. When omitted, this defaults to 1.
    /// </summary>
    public int? MaxDepth { get; init; }
}
