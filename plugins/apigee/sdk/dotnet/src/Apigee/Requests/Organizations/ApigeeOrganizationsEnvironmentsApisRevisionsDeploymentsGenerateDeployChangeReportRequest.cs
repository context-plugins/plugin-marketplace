namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReport operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsApisRevisionsDeploymentsGenerateDeployChangeReportRequest
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
    /// Resource name segment (apisId).
    /// </summary>
    public required string ApisId { get; init; }

    /// <summary>
    /// Resource name segment (revisionsId).
    /// </summary>
    public required string RevisionsId { get; init; }

    /// <summary>
    /// Flag that specifies whether to force the deployment of the new revision over the currently deployed revision by overriding conflict checks.
    /// </summary>
    public bool? Override { get; init; }
}
