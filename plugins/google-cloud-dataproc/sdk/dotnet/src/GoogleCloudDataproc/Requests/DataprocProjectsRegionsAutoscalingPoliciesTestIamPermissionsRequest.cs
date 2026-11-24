using GoogleCloudDataproc.Models;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissions operation.
/// </summary>
public sealed record DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsRequest
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
    /// Resource name segment (autoscalingPoliciesId).
    /// </summary>
    public required string AutoscalingPoliciesId { get; init; }

    public required TestIamPermissionsRequest Body { get; init; }
}
