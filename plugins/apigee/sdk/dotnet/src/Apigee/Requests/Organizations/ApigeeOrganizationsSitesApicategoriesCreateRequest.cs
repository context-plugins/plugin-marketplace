using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSitesApicategoriesCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsSitesApicategoriesCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (sitesId).
    /// </summary>
    public required string SitesId { get; init; }

    public required GoogleCloudApigeeV1ApiCategory Body { get; init; }
}
