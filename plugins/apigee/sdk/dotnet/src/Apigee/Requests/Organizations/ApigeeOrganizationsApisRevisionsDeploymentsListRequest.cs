namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsApisRevisionsDeploymentsList operation.
/// </summary>
public sealed record ApigeeOrganizationsApisRevisionsDeploymentsListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (apisId).
    /// </summary>
    public required string ApisId { get; init; }

    /// <summary>
    /// Resource name segment (revisionsId).
    /// </summary>
    public required string RevisionsId { get; init; }
}
