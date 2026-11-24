namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEndpointAttachmentsDelete operation.
/// </summary>
public sealed record ApigeeOrganizationsEndpointAttachmentsDeleteRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (endpointAttachmentsId).
    /// </summary>
    public required string EndpointAttachmentsId { get; init; }
}
