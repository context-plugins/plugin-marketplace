namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsAppgroupsAppsList operation.
/// </summary>
public sealed record ApigeeOrganizationsAppgroupsAppsListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (appgroupsId).
    /// </summary>
    public required string AppgroupsId { get; init; }

    /// <summary>
    /// Optional. Maximum number entries to return. If unspecified, at most 1000 entries will be returned.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. Page token. If provides, must be a valid AppGroup app returned from a previous call that can be used to retrieve the next page.
    /// </summary>
    public string? PageToken { get; init; }
}
