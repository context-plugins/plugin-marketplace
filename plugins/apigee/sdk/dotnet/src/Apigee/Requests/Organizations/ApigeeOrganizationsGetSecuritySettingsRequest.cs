namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsGetSecuritySettings operation.
/// </summary>
public sealed record ApigeeOrganizationsGetSecuritySettingsRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }
}
