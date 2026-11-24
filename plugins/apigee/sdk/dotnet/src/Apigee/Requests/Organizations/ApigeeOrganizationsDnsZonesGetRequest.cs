namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsDnsZonesGet operation.
/// </summary>
public sealed record ApigeeOrganizationsDnsZonesGetRequest
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
