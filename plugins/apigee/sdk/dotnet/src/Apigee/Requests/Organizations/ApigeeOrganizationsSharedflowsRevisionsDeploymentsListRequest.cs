namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSharedflowsRevisionsDeploymentsList operation.
/// </summary>
public sealed record ApigeeOrganizationsSharedflowsRevisionsDeploymentsListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (sharedflowsId).
    /// </summary>
    public required string SharedflowsId { get; init; }

    /// <summary>
    /// Resource name segment (revisionsId).
    /// </summary>
    public required string RevisionsId { get; init; }
}
