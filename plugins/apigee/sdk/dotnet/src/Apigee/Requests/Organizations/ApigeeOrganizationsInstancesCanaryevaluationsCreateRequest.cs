using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsInstancesCanaryevaluationsCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsInstancesCanaryevaluationsCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (instancesId).
    /// </summary>
    public required string InstancesId { get; init; }

    public required GoogleCloudApigeeV1CanaryEvaluation Body { get; init; }
}
