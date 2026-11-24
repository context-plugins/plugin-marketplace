namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProduct operation.
/// </summary>
public sealed record ApigeeOrganizationsDevelopersAppsKeysApiproductsUpdateDeveloperAppKeyApiProductRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (developersId).
    /// </summary>
    public required string DevelopersId { get; init; }

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

    /// <summary>
    /// Approve or revoke the consumer key by setting this value to <c>approve</c> or <c>revoke</c>, respectively.
    /// </summary>
    public string? Action { get; init; }
}
