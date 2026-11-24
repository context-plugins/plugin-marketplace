namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSitesApicategoriesDelete operation.
/// </summary>
public sealed record ApigeeOrganizationsSitesApicategoriesDeleteRequest
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
