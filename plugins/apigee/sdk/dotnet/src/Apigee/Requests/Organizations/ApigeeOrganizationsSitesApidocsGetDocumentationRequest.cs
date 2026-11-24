namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSitesApidocsGetDocumentation operation.
/// </summary>
public sealed record ApigeeOrganizationsSitesApidocsGetDocumentationRequest
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
}
