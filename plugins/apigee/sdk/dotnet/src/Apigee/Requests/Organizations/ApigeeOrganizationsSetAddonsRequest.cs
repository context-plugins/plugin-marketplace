using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSetAddons operation.
/// </summary>
public sealed record ApigeeOrganizationsSetAddonsRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    public required GoogleCloudApigeeV1SetAddonsRequest Body { get; init; }
}
