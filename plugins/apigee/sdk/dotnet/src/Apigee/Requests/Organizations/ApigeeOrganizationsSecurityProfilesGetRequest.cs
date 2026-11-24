namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSecurityProfilesGet operation.
/// </summary>
public sealed record ApigeeOrganizationsSecurityProfilesGetRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (securityProfilesId).
    /// </summary>
    public required string SecurityProfilesId { get; init; }
}
