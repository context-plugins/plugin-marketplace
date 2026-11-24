namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSecurityProfilesListRevisions operation.
/// </summary>
public sealed record ApigeeOrganizationsSecurityProfilesListRevisionsRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (securityProfilesId).
    /// </summary>
    public required string SecurityProfilesId { get; init; }

    /// <summary>
    /// The maximum number of profile revisions to return. The service may return fewer than this value. If unspecified, at most 50 revisions will be returned.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// A page token, received from a previous <c>ListSecurityProfileRevisions</c> call. Provide this to retrieve the subsequent page.
    /// </summary>
    public string? PageToken { get; init; }
}
