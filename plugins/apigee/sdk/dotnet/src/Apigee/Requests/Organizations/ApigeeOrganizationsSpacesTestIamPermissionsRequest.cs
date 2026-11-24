using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSpacesTestIamPermissions operation.
/// </summary>
public sealed record ApigeeOrganizationsSpacesTestIamPermissionsRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (spacesId).
    /// </summary>
    public required string SpacesId { get; init; }

    public required GoogleIamV1TestIamPermissionsRequest Body { get; init; }
}
