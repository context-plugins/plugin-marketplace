using Bitbucket.Models.AllOf;

namespace Bitbucket.Requests.Commits;

/// <summary>
/// The inputs of the CreateOrUpdateReport operation.
/// </summary>
public sealed record CreateOrUpdateReportRequest
{
    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// The repository.
    /// </summary>
    public required string RepoSlug { get; init; }

    /// <summary>
    /// The commit the report belongs to.
    /// </summary>
    public required string Commit { get; init; }

    /// <summary>
    /// Either the uuid or external-id of the report.
    /// </summary>
    public required string ReportId { get; init; }

    /// <summary>
    /// The report to create or update
    /// </summary>
    public required Report Body { get; init; }
}
