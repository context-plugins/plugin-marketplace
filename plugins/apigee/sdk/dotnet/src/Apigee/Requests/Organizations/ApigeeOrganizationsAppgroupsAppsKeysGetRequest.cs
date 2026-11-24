namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsAppgroupsAppsKeysGet operation.
/// </summary>
public sealed record ApigeeOrganizationsAppgroupsAppsKeysGetRequest
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

    /// <summary>
    /// Resource name segment (keysId).
    /// </summary>
    public required string KeysId { get; init; }
}
