namespace CircleCi.Requests.Insights;

/// <summary>
/// The inputs of the GetWorkflowRuns operation.
/// </summary>
public sealed record GetWorkflowRunsRequest
{
    /// <summary>
    /// The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs)
    /// </summary>
    public required string ProjectSlug { get; init; }

    /// <summary>
    /// The name of the workflow
    /// </summary>
    public required string WorkflowName { get; init; }

    /// <summary>
    /// Filter by branch name
    /// </summary>
    public string? Branch { get; init; }

    /// <summary>
    /// Token for retrieving the next page of results
    /// </summary>
    public string? PageToken { get; init; }
}
