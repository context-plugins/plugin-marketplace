namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvgroupsAttachmentsDelete operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvgroupsAttachmentsDeleteRequest
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
