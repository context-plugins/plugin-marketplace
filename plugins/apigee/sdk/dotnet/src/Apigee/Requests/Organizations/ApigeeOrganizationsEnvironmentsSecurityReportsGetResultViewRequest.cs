namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsSecurityReportsGetResultView operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsSecurityReportsGetResultViewRequest
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
    /// Resource name segment (securityReportsId).
    /// </summary>
    public required string SecurityReportsId { get; init; }
}
