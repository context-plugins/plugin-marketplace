namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsDevelopersAttributesList operation.
/// </summary>
public sealed record ApigeeOrganizationsDevelopersAttributesListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (developersId).
    /// </summary>
    public required string DevelopersId { get; init; }
}
