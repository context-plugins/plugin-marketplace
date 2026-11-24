using GoogleCloudDataproc.Models;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicy operation.
/// </summary>
public sealed record DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyRequest
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
    /// Resource name segment (autoscalingPoliciesId).
    /// </summary>
    public required string AutoscalingPoliciesId { get; init; }

    public required SetIamPolicyRequest Body { get; init; }
}
