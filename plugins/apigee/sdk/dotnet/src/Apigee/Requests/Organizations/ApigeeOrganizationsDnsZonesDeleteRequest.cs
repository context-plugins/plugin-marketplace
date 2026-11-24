namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsDnsZonesDelete operation.
/// </summary>
public sealed record ApigeeOrganizationsDnsZonesDeleteRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (dnsZonesId).
    /// </summary>
    public required string DnsZonesId { get; init; }
}
