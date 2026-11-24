namespace CircleCi.Requests.PipelineApi;

/// <summary>
/// The inputs of the ListMyProjectPipelines operation.
/// </summary>
public sealed record ListMyProjectPipelinesRequest
{
    /// <summary>
    /// The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs)
    /// </summary>
    public required string ProjectSlug { get; init; }

    /// <summary>
    /// Token for retrieving the next page of results
    /// </summary>
    public string? PageToken { get; init; }
}
