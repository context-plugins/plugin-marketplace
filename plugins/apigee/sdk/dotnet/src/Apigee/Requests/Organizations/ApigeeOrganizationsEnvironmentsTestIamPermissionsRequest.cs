using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsTestIamPermissions operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsTestIamPermissionsRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (environmentsId).
    /// </summary>
    public required string EnvironmentsId { get; init; }

    public required GoogleIamV1TestIamPermissionsRequest Body { get; init; }
}
