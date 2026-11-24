namespace CircleCi.Requests.Insights;

/// <summary>
/// The inputs of the GetWorkflowTestMetrics operation.
/// </summary>
public sealed record GetWorkflowTestMetricsRequest
{
    /// <summary>
    /// The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs)
    /// </summary>
    public required string ProjectSlug { get; init; }

    /// <summary>
    /// The name of the workflow
    /// </summary>
    public required string WorkflowName { get; init; }
}
