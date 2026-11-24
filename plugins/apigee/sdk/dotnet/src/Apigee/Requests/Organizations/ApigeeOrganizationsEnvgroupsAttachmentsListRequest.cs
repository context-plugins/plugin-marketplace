namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvgroupsAttachmentsList operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvgroupsAttachmentsListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (envgroupsId).
    /// </summary>
    public required string EnvgroupsId { get; init; }

    /// <summary>
    /// Maximum number of environment group attachments to return. The page size defaults to 25.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Page token, returned by a previous ListEnvironmentGroupAttachments call, that you can use to retrieve the next page.
    /// </summary>
    public string? PageToken { get; init; }
}
