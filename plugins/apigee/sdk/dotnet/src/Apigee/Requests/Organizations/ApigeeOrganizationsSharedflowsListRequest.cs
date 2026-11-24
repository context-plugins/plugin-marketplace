namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSharedflowsList operation.
/// </summary>
public sealed record ApigeeOrganizationsSharedflowsListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Indicates whether to include shared flow metadata in the response.
    /// </summary>
    public bool? IncludeMetaData { get; init; }

    /// <summary>
    /// Indicates whether to include a list of revisions in the response.
    /// </summary>
    public bool? IncludeRevisions { get; init; }

    /// <summary>
    /// Optional. The space ID used to filter the list of shared flows (optional). If unspecified, all shared flows in the organization will be listed. To learn how Spaces can be used to manage resources, read the <see href="https://cloud.google.com/apigee/docs/api-platform/system-administration/spaces/apigee-spaces-overview">Apigee Spaces Overview</see>.
    /// </summary>
    public string? Space { get; init; }
}
