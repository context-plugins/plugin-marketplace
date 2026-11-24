namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsDeploymentsList operation.
/// </summary>
public sealed record ApigeeOrganizationsDeploymentsListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Optional. Flag that specifies whether to return shared flow or API proxy deployments. Set to <c>true</c> to return shared flow deployments; set to <c>false</c> to return API proxy deployments. Defaults to <c>false</c>.
    /// </summary>
    public bool? SharedFlows { get; init; }
}
