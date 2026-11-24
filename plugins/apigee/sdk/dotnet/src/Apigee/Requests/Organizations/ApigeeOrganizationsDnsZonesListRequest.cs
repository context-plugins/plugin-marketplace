namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsDnsZonesList operation.
/// </summary>
public sealed record ApigeeOrganizationsDnsZonesListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Optional. Maximum number of DNS zones to return. If unspecified, at most 25 DNS zones will be returned.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. Page token, returned from a previous <c>ListDnsZones</c> call, that you can use to retrieve the next page.
    /// </summary>
    public string? PageToken { get; init; }
}
