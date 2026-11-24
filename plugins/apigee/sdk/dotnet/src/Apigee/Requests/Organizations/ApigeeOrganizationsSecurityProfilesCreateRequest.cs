using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSecurityProfilesCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsSecurityProfilesCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Required. The ID to use for the SecurityProfile, which will become the final component of the action's resource name. This value should be 1-63 characters and validated by "(^<see href="[a-z0-9-]{0,61}[a-z0-9]">a-z</see>?$)".
    /// </summary>
    public string? SecurityProfileId { get; init; }

    public required GoogleCloudApigeeV1SecurityProfile Body { get; init; }
}
