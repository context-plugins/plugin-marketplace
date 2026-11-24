namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSitesApidocsList operation.
/// </summary>
public sealed record ApigeeOrganizationsSitesApidocsListRequest
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
    /// Optional. The maximum number of items to return. The service may return fewer than this value. If unspecified, at most 25 books will be returned. The maximum value is 100; values above 100 will be coerced to 100.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListApiDocs</c> call. Provide this to retrieve the subsequent page.
    /// </summary>
    public string? PageToken { get; init; }
}
