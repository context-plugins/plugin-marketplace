namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsDeploymentsList operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsDeploymentsListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (environmentsId).
    /// </summary>
    public required string EnvironmentsId { get; init; }

    /// <summary>
    /// Optional. Flag that specifies whether to return shared flow or API proxy deployments. Set to <c>true</c> to return shared flow deployments; set to <c>false</c> to return API proxy deployments. Defaults to <c>false</c>.
    /// </summary>
    public bool? SharedFlows { get; init; }
}
