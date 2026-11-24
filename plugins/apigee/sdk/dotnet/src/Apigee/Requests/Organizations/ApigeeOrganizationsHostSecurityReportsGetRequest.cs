namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsHostSecurityReportsGet operation.
/// </summary>
public sealed record ApigeeOrganizationsHostSecurityReportsGetRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (hostSecurityReportsId).
    /// </summary>
    public required string HostSecurityReportsId { get; init; }
}
