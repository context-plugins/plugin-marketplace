using Bitbucket.Models;

namespace Bitbucket.Requests.IssueTracker;

/// <summary>
/// The inputs of the PostRepositoriesByWorkspaceByRepoSlugIssuesExport operation.
/// </summary>
public sealed record PostRepositoriesByWorkspaceByRepoSlugIssuesExportRequest
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
    /// The options to apply to the export. Available options include <c>project_key</c> and <c>project_name</c> which, if specified, are used as the project key and name in the exported Jira json format. Option <c>send_email</c> specifies whether an email should be sent upon export result. Option <c>include_attachments</c> specifies whether attachments are included in the export.
    /// </summary>
    public ExportOptions? Body { get; init; }
}
