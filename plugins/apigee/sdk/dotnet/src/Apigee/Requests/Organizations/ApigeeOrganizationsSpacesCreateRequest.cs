using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSpacesCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsSpacesCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Required. Resource ID of the space.
    /// </summary>
    public string? SpaceId { get; init; }

    public required GoogleCloudApigeeV1Space Body { get; init; }
}
