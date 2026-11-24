namespace CircleCi.Requests.PipelineApi;

/// <summary>
/// The inputs of the ListProjectPipelines operation.
/// </summary>
public sealed record ListProjectPipelinesRequest
{
    /// <summary>
    /// The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs)
    /// </summary>
    public required string ProjectSlug { get; init; }

    /// <summary>
    /// Filter pipelines by branch name
    /// </summary>
    public string? Branch { get; init; }

    /// <summary>
    /// Token for retrieving the next page of results
    /// </summary>
    public string? PageToken { get; init; }
}
