using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Bitbucket.Models.AllOf;

namespace Bitbucket.Requests.Commits;

/// <summary>
/// The inputs of the BulkCreateOrUpdateAnnotations operation.
/// </summary>
public sealed record BulkCreateOrUpdateAnnotationsRequest
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
    /// The commit for which to retrieve reports.
    /// </summary>
    public required string Commit { get; init; }

    /// <summary>
    /// Uuid or external-if of the report for which to get annotations for.
    /// </summary>
    public required string ReportId { get; init; }

    /// <summary>
    /// The annotations to create or update
    /// </summary>
    [MinLength(1)]
    [MaxLength(100)]
    public required IReadOnlyList<ReportAnnotation> Body { get; init; }
}
