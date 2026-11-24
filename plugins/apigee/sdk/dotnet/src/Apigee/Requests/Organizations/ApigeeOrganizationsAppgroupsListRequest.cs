namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsAppgroupsList operation.
/// </summary>
public sealed record ApigeeOrganizationsAppgroupsListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// The filter expression to be used to get the list of AppGroups, where filtering can be done on status, channelId or channelUri of the app group. Examples: filter=status=active", filter=channelId=, filter=channelUri=
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Count of AppGroups a single page can have in the response. If unspecified, at most 1000 AppGroups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// The starting index record for listing the AppGroups.
    /// </summary>
    public string? PageToken { get; init; }
}
