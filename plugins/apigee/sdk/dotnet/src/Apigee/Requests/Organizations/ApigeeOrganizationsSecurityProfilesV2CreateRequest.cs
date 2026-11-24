using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSecurityProfilesV2Create operation.
/// </summary>
public sealed record ApigeeOrganizationsSecurityProfilesV2CreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Required. The security profile id.
    /// </summary>
    public string? SecurityProfileV2Id { get; init; }

    public required GoogleCloudApigeeV1SecurityProfileV2 Body { get; init; }
}
