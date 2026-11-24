using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvgroupsPatch operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvgroupsPatchRequest
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
    /// Optional. List of fields to be updated.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required GoogleCloudApigeeV1EnvironmentGroup Body { get; init; }
}
