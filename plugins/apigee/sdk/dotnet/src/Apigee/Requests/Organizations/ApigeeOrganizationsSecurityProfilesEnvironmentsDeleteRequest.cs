namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSecurityProfilesEnvironmentsDelete operation.
/// </summary>
public sealed record ApigeeOrganizationsSecurityProfilesEnvironmentsDeleteRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (securityProfilesId).
    /// </summary>
    public required string SecurityProfilesId { get; init; }

    /// <summary>
    /// Resource name segment (environmentsId).
    /// </summary>
    public required string EnvironmentsId { get; init; }
}
