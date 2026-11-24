using GoogleCloudDataproc.Models;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicy operation.
/// </summary>
public sealed record DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyRequest
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

    public required GetIamPolicyRequest Body { get; init; }
}
