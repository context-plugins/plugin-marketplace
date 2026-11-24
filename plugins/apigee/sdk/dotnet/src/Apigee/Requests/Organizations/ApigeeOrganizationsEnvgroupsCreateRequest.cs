using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvgroupsCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvgroupsCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Optional. ID of the environment group. Overrides any ID in the environment_group resource.
    /// </summary>
    public string? Name { get; init; }

    public required GoogleCloudApigeeV1EnvironmentGroup Body { get; init; }
}
