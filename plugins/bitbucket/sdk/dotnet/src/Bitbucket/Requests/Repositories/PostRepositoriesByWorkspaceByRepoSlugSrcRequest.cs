namespace Bitbucket.Requests.Repositories;

/// <summary>
/// The inputs of the PostRepositoriesByWorkspaceByRepoSlugSrc operation.
/// </summary>
public sealed record PostRepositoriesByWorkspaceByRepoSlugSrcRequest
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
    /// The commit message. When omitted, Bitbucket uses a canned string.
    /// </summary>
    public string? Message { get; init; }

    /// <summary>
    /// The raw string to be used as the new commit's author.
    /// This string follows the format
    /// <c>Erik van Zijst &lt;evzijst@atlassian.com&gt;</c>.
    /// <para>
    /// When omitted, Bitbucket uses the authenticated user's
    /// full/display name and primary email address. Commits cannot
    /// be created anonymously.
    /// </para>
    /// </summary>
    public string? Author { get; init; }

    /// <summary>
    /// #### Deprecation Notice:
    /// Support for specifying multiple parent
    /// commits is deprecated and will be removed in a future release.
    /// Only a single SHA1 is accepted.
    /// <para>
    /// A SHA1 of the commit that should be the parent of the newly created
    /// commit. When omitted, the new commit will inherit from and
    /// become a child of the main branch's tip/HEAD commit.
    /// </para>
    /// </summary>
    public string? Parents { get; init; }

    /// <summary>
    /// Optional field that declares the files that the request is
    /// manipulating. When adding a new file to a repo, or when
    /// overwriting an existing file, the client can just upload
    /// the full contents of the file in a normal form field and
    /// the use of this <c>files</c> meta data field is redundant.
    /// However, when the <c>files</c> field contains a file path that
    /// does not have a corresponding, identically-named form
    /// field, then Bitbucket interprets that as the client wanting
    /// to replace the named file with the null set and the file is
    /// deleted instead.
    /// <para>
    /// Paths in the repo that are referenced in neither files nor
    /// an individual file field, remain unchanged and carry over
    /// from the parent to the new commit.
    /// </para>
    /// <para>
    /// This API does not support renaming as an explicit feature.
    /// To rename a file, simply delete it and recreate it under
    /// the new name in the same commit.
    /// </para>
    /// </summary>
    public string? Files { get; init; }

    /// <summary>
    /// The name of the branch that the new commit should be
    /// created on. When omitted, the commit will be created on top
    /// of the main branch and will become the main branch's new
    /// head.
    /// <para>
    /// When a branch name is provided that already exists in the
    /// repo, then the commit will be created on top of that
    /// branch. In this case, *if* a parent SHA1 was also provided,
    /// then it is asserted that the parent is the branch's
    /// tip/HEAD at the time the request is made. When this is not
    /// the case, a 409 is returned.
    /// </para>
    /// <para>
    /// When a new branch name is specified (that does not already
    /// exist in the repo), and no parent SHA1s are provided, then
    /// the new commit will inherit from the current main branch's
    /// tip/HEAD commit, but not advance the main branch. The new
    /// commit will be the new branch. When the request *also*
    /// specifies a parent SHA1, then the new commit and branch
    /// are created directly on top of the parent commit,
    /// regardless of the state of the main branch.
    /// </para>
    /// <para>
    /// When a branch name is not specified, but a parent SHA1 is
    /// provided, then Bitbucket asserts that it represents the
    /// main branch's current HEAD/tip, or a 409 is returned.
    /// </para>
    /// <para>
    /// When a branch name is not specified and the repo is empty,
    /// the new commit will become the repo's root commit and will
    /// be on the main branch.
    /// </para>
    /// <para>
    /// When a branch name is specified and the repo is empty, the
    /// new commit will become the repo's root commit and also
    /// define the repo's main branch going forward.
    /// </para>
    /// <para>
    /// This API cannot be used to create additional root commits
    /// in non-empty repos.
    /// </para>
    /// <para>
    /// The branch field cannot be repeated.
    /// </para>
    /// <para>
    /// As a side effect, this API can be used to create a new
    /// branch without modifying any files, by specifying a new
    /// branch name in this field, together with <c>parents</c>, but
    /// omitting the <c>files</c> fields, while not sending any files.
    /// This will create a new commit and branch with the same
    /// contents as the first parent. The diff of this commit
    /// against its first parent will be empty.
    /// </para>
    /// </summary>
    public string? Branch { get; init; }
}
