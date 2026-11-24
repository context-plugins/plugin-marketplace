namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsApisList operation.
/// </summary>
public sealed record ApigeeOrganizationsApisListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Flag that specifies whether to include API proxy metadata in the response.
    /// </summary>
    public bool? IncludeMetaData { get; init; }

    /// <summary>
    /// Flag that specifies whether to include a list of revisions in the response.
    /// </summary>
    public bool? IncludeRevisions { get; init; }

    /// <summary>
    /// Optional. The space ID to filter the list of proxies (optional). If unspecified, all proxies in the organization will be listed.
    /// </summary>
    public string? Space { get; init; }
}
