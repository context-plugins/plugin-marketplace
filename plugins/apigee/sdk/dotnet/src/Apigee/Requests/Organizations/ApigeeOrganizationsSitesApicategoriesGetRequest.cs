namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSitesApicategoriesGet operation.
/// </summary>
public sealed record ApigeeOrganizationsSitesApicategoriesGetRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (sitesId).
    /// </summary>
    public required string SitesId { get; init; }

    /// <summary>
    /// Resource name segment (apicategoriesId).
    /// </summary>
    public required string ApicategoriesId { get; init; }
}
