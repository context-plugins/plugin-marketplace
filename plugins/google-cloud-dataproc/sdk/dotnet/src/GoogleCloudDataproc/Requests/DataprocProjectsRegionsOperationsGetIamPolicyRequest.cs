using GoogleCloudDataproc.Models;

namespace GoogleCloudDataproc.Requests;

/// <summary>
/// The inputs of the DataprocProjectsRegionsOperationsGetIamPolicy operation.
/// </summary>
public sealed record DataprocProjectsRegionsOperationsGetIamPolicyRequest
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
    /// Resource name segment (operationsId).
    /// </summary>
    public required string OperationsId { get; init; }

    public required GetIamPolicyRequest Body { get; init; }
}
