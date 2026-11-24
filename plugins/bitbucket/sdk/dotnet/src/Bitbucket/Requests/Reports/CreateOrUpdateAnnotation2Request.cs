using Bitbucket.Models.AllOf;

namespace Bitbucket.Requests.Reports;

/// <summary>
/// The inputs of the CreateOrUpdateAnnotation2 operation.
/// </summary>
public sealed record CreateOrUpdateAnnotation2Request
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
    /// Either the uuid or external-id of the annotation.
    /// </summary>
    public required string AnnotationId { get; init; }

    /// <summary>
    /// The annotation to create or update
    /// </summary>
    public required ReportAnnotationBitbucketReportsApi Body { get; init; }
}
