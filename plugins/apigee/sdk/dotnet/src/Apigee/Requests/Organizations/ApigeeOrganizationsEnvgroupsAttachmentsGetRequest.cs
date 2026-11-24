namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvgroupsAttachmentsGet operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvgroupsAttachmentsGetRequest
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
    /// Resource name segment (attachmentsId).
    /// </summary>
    public required string AttachmentsId { get; init; }
}
