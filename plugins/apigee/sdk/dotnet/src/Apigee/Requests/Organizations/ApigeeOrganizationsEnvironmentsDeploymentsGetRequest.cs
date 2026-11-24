namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsDeploymentsGet operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsDeploymentsGetRequest
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
    /// Resource name segment (deploymentsId).
    /// </summary>
    public required string DeploymentsId { get; init; }
}
