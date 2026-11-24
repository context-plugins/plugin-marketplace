namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsLocationsWorkflowTemplatesGet operation.
/// </summary>
public sealed record DataprocProjectsLocationsWorkflowTemplatesGetRequest
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
    /// Optional. The version of workflow template to retrieve. Only previously instantiated versions can be retrieved.If unspecified, retrieves the current version.
    /// </summary>
    public int? Version { get; init; }
}
