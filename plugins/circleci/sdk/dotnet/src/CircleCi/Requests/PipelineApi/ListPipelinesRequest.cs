namespace CircleCi.Requests.PipelineApi;

/// <summary>
/// The inputs of the ListPipelines operation.
/// </summary>
public sealed record ListPipelinesRequest
{
    /// <summary>
    /// Organization slug in the form vcs-slug/org-name
    /// </summary>
    public string? OrgSlug { get; init; }

    /// <summary>
    /// Filter to only pipelines triggered by the current user
    /// </summary>
    public bool? Mine { get; init; }

    /// <summary>
    /// Token for retrieving the next page of results
    /// </summary>
    public string? PageToken { get; init; }
}
