namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsApimServiceExtensionsList operation.
/// </summary>
public sealed record ApigeeOrganizationsApimServiceExtensionsListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Optional. Maximum number of items to return. If unspecified, at most 25 service extension will be returned.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. Page token, returned from a previous <c>ListApimServiceExtensions</c> call, that you can use to retrieve the next page.
    /// </summary>
    public string? PageToken { get; init; }
}
