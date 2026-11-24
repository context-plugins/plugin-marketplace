namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsLocationsWorkflowTemplatesDelete operation.
/// </summary>
public sealed record DataprocProjectsLocationsWorkflowTemplatesDeleteRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (locationsId).
    /// </summary>
    public required string LocationsId { get; init; }

    /// <summary>
    /// Resource name segment (workflowTemplatesId).
    /// </summary>
    public required string WorkflowTemplatesId { get; init; }

    /// <summary>
    /// Optional. The version of workflow template to delete. If specified, will only delete the template if the current server version matches specified version.
    /// </summary>
    public int? Version { get; init; }
}
