namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsRegionsWorkflowTemplatesDelete operation.
/// </summary>
public sealed record DataprocProjectsRegionsWorkflowTemplatesDeleteRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (regionsId).
    /// </summary>
    public required string RegionsId { get; init; }

    /// <summary>
    /// Resource name segment (workflowTemplatesId).
    /// </summary>
    public required string WorkflowTemplatesId { get; init; }

    /// <summary>
    /// Optional. The version of workflow template to delete. If specified, will only delete the template if the current server version matches specified version.
    /// </summary>
    public int? Version { get; init; }
}
