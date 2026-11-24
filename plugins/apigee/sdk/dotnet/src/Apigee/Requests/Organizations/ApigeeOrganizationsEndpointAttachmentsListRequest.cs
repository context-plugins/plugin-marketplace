namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEndpointAttachmentsList operation.
/// </summary>
public sealed record ApigeeOrganizationsEndpointAttachmentsListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Optional. Maximum number of endpoint attachments to return. If unspecified, at most 25 attachments will be returned.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. Page token, returned from a previous <c>ListEndpointAttachments</c> call, that you can use to retrieve the next page.
    /// </summary>
    public string? PageToken { get; init; }
}
