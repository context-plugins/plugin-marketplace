using GoogleCloudDataproc.Models;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsRegionsWorkflowTemplatesSetIamPolicy operation.
/// </summary>
public sealed record DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest
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

    public required SetIamPolicyRequest Body { get; init; }
}
