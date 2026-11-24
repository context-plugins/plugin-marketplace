using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSecurityProfilesEnvironmentsCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsSecurityProfilesEnvironmentsCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (securityProfilesId).
    /// </summary>
    public required string SecurityProfilesId { get; init; }

    public required GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation Body { get; init; }
}
