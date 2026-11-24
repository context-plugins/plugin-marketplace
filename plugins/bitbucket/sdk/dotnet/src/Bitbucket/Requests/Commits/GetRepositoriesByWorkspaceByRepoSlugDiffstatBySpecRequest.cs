namespace Bitbucket.Requests.Commits;

/// <summary>
/// The inputs of the GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpec operation.
/// </summary>
public sealed record GetRepositoriesByWorkspaceByRepoSlugDiffstatBySpecRequest
{
    /// <summary>
    /// This can either be the repository slug or the UUID of the repository,
    /// surrounded by curly-braces, for example: <c>{repository UUID}</c>.
    /// </summary>
    public required string RepoSlug { get; init; }

    /// <summary>
    /// A commit SHA (e.g. <c>3a8b42</c>) or a commit range using double dot
    /// notation (e.g. <c>3a8b42..9ff173</c>).
    /// </summary>
    public required string Spec { get; init; }

    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// Generate diffs that ignore whitespace
    /// </summary>
    public bool? IgnoreWhitespace { get; init; }

    /// <summary>
    /// This parameter is deprecated. The 'topic' parameter should be used
    /// instead. The 'merge' and 'topic' parameters cannot be both used at
    /// the same time.
    /// <para>
    /// If true, the source commit is merged into the
    /// destination commit, and then a diffstat from the
    /// destination to the merge result is returned. If false,
    /// a simple 'two dot' diffstat between the source and
    /// destination is returned. True if omitted.
    /// </para>
    /// </summary>
    public bool? Merge { get; init; }

    /// <summary>
    /// Limit the diffstat to a particular file (this parameter
    /// can be repeated for multiple paths).
    /// </summary>
    public string? Path { get; init; }

    /// <summary>
    /// Whether to perform rename detection, true if omitted.
    /// </summary>
    public bool? Renames { get; init; }

    /// <summary>
    /// If true, returns 2-way 'three-dot' diff.
    /// This is a diff between the source commit and the merge base
    /// of the source commit and the destination commit.
    /// If false, a simple 'two dot' diff between the source and
    /// destination is returned.
    /// </summary>
    public bool? Topic { get; init; }
}
