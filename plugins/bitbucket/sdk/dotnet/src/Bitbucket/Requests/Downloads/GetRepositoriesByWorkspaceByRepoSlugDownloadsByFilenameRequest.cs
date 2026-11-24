namespace Bitbucket.Requests.Downloads;

/// <summary>
/// The inputs of the GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilename operation.
/// </summary>
public sealed record GetRepositoriesByWorkspaceByRepoSlugDownloadsByFilenameRequest
{
    /// <summary>
    /// Name of the file.
    /// </summary>
    public required string Filename { get; init; }

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
}
