namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsInstancesAttachmentsList operation.
/// </summary>
public sealed record ApigeeOrganizationsInstancesAttachmentsListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (instancesId).
    /// </summary>
    public required string InstancesId { get; init; }

    /// <summary>
    /// Maximum number of instance attachments to return. Defaults to 25.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Page token, returned by a previous ListInstanceAttachments call, that you can use to retrieve the next page of content.
    /// </summary>
    public string? PageToken { get; init; }
}
