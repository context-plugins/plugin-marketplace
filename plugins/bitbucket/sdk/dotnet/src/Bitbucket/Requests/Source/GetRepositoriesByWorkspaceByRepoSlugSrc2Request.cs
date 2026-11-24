using Bitbucket.Models.Enums;

namespace Bitbucket.Requests.Source;

/// <summary>
/// The inputs of the GetRepositoriesByWorkspaceByRepoSlugSrc2 operation.
/// </summary>
public sealed record GetRepositoriesByWorkspaceByRepoSlugSrc2Request
{
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
    /// Instead of returning the file's contents, return the (json) meta data for it.
    /// </summary>
    public Format? Format { get; init; }
}
