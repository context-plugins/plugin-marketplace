namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsHostSecurityReportsGetResultView operation.
/// </summary>
public sealed record ApigeeOrganizationsHostSecurityReportsGetResultViewRequest
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
