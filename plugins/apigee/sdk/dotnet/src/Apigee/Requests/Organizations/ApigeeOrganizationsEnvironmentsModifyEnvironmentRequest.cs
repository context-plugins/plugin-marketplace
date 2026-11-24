using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsModifyEnvironment operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsModifyEnvironmentRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (environmentsId).
    /// </summary>
    public required string EnvironmentsId { get; init; }

    /// <summary>
    /// List of fields to be updated. Fields that can be updated: node_config.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required GoogleCloudApigeeV1Environment Body { get; init; }
}
