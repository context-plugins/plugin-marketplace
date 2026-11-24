using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsUpdate operation.
/// </summary>
public sealed record ApigeeOrganizationsUpdateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    public required GoogleCloudApigeeV1Organization Body { get; init; }
}
