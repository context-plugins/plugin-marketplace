namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSecurityProfilesList operation.
/// </summary>
public sealed record ApigeeOrganizationsSecurityProfilesListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// The maximum number of profiles to return. The service may return fewer than this value. If unspecified, at most 50 profiles will be returned.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// A page token, received from a previous <c>ListSecurityProfiles</c> call. Provide this to retrieve the subsequent page.
    /// </summary>
    public string? PageToken { get; init; }
}
