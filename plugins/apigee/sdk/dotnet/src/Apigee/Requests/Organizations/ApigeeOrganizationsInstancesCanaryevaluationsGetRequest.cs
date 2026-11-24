namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsInstancesCanaryevaluationsGet operation.
/// </summary>
public sealed record ApigeeOrganizationsInstancesCanaryevaluationsGetRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (instancesId).
    /// </summary>
    public required string InstancesId { get; init; }

    /// <summary>
    /// Resource name segment (canaryevaluationsId).
    /// </summary>
    public required string CanaryevaluationsId { get; init; }
}
