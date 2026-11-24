using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSpacesPatch operation.
/// </summary>
public sealed record ApigeeOrganizationsSpacesPatchRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (spacesId).
    /// </summary>
    public required string SpacesId { get; init; }

    /// <summary>
    /// Required. List of fields to be updated. Fields that can be updated: display_name.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required GoogleCloudApigeeV1Space Body { get; init; }
}
