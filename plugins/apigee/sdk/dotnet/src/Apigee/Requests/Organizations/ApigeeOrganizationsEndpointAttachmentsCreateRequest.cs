using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEndpointAttachmentsCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsEndpointAttachmentsCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// ID to use for the endpoint attachment. ID must start with a lowercase letter followed by up to 31 lowercase letters, numbers, or hyphens, and cannot end with a hyphen. The minimum length is 2.
    /// </summary>
    public string? EndpointAttachmentId { get; init; }

    public required GoogleCloudApigeeV1EndpointAttachment Body { get; init; }
}
