namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsAppgroupsAppsKeysApiproductsDelete operation.
/// </summary>
public sealed record ApigeeOrganizationsAppgroupsAppsKeysApiproductsDeleteRequest
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

    /// <summary>
    /// Resource name segment (apiproductsId).
    /// </summary>
    public required string ApiproductsId { get; init; }
}
