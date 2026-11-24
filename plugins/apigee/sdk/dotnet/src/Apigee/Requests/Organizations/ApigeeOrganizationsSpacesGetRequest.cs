namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSpacesGet operation.
/// </summary>
public sealed record ApigeeOrganizationsSpacesGetRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (spacesId).
    /// </summary>
    public required string SpacesId { get; init; }
}
