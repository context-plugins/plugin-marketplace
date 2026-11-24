namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSharedflowsDeploymentsList operation.
/// </summary>
public sealed record ApigeeOrganizationsSharedflowsDeploymentsListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (sharedflowsId).
    /// </summary>
    public required string SharedflowsId { get; init; }
}
