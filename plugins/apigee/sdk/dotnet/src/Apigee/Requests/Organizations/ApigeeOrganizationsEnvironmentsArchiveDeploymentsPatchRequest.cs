using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatch operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsArchiveDeploymentsPatchRequest
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
    /// Resource name segment (archiveDeploymentsId).
    /// </summary>
    public required string ArchiveDeploymentsId { get; init; }

    /// <summary>
    /// Required. The list of fields to be updated.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required GoogleCloudApigeeV1ArchiveDeployment Body { get; init; }
}
