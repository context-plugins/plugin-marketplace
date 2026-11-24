using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKey operation.
/// </summary>
public sealed record ApigeeOrganizationsDevelopersAppsKeysUpdateDeveloperAppKeyRequest
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
    /// Approve or revoke the consumer key by setting this value to <c>approve</c> or <c>revoke</c>, respectively. The <c>Content-Type</c> header must be set to <c>application/octet-stream</c>.
    /// </summary>
    public string? Action { get; init; }

    public required GoogleCloudApigeeV1DeveloperAppKey Body { get; init; }
}
