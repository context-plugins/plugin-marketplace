using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsDnsZonesCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsDnsZonesCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Required. User assigned ID for this resource. Must be unique within the organization. The name must be 1-63 characters long, must begin with a letter, end with a letter or digit, and only contain lowercase letters, digits or dashes.
    /// </summary>
    public string? DnsZoneId { get; init; }

    public required GoogleCloudApigeeV1DnsZone Body { get; init; }
}
