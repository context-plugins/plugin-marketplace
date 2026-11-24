namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSitesApicategoriesList operation.
/// </summary>
public sealed record ApigeeOrganizationsSitesApicategoriesListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (sitesId).
    /// </summary>
    public required string SitesId { get; init; }
}
