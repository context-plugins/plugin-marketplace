using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvgroupsAttachmentsCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvgroupsAttachmentsCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (envgroupsId).
    /// </summary>
    public required string EnvgroupsId { get; init; }

    public required GoogleCloudApigeeV1EnvironmentGroupAttachment Body { get; init; }
}
