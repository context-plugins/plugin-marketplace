using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatus operation.
/// </summary>
public sealed record ApigeeOrganizationsDevelopersAppsGenerateKeyPairOrUpdateDeveloperAppStatusRequest
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
    /// Action. Valid values are <c>approve</c> or <c>revoke</c>.
    /// </summary>
    public string? Action { get; init; }

    public required GoogleCloudApigeeV1DeveloperApp Body { get; init; }
}
