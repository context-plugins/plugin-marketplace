using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsAppgroupsAppsKeysCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsAppgroupsAppsKeysCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (appgroupsId).
    /// </summary>
    public required string AppgroupsId { get; init; }

    /// <summary>
    /// Resource name segment (appsId).
    /// </summary>
    public required string AppsId { get; init; }

    public required GoogleCloudApigeeV1AppGroupAppKey Body { get; init; }
}
