namespace CircleCi.Requests.JobApi;

/// <summary>
/// The inputs of the ListJobTests operation.
/// </summary>
public sealed record ListJobTestsRequest
{
    /// <summary>
    /// The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs)
    /// </summary>
    public required string ProjectSlug { get; init; }

    /// <summary>
    /// The number of the job
    /// </summary>
    public required int JobNumber { get; init; }
}
