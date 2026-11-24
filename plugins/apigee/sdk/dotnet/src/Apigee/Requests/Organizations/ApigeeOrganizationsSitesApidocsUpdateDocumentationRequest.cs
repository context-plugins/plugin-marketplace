using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSitesApidocsUpdateDocumentation operation.
/// </summary>
public sealed record ApigeeOrganizationsSitesApidocsUpdateDocumentationRequest
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
    /// Resource name segment (apidocsId).
    /// </summary>
    public required string ApidocsId { get; init; }

    public required GoogleCloudApigeeV1ApiDocDocumentation Body { get; init; }
}
