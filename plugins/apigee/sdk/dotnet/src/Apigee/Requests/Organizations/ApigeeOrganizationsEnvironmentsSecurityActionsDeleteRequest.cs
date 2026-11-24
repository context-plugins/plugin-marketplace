namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsSecurityActionsDelete operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsSecurityActionsDeleteRequest
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
    /// Resource name segment (securityActionsId).
    /// </summary>
    public required string SecurityActionsId { get; init; }
}
