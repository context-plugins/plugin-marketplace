using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsAppgroupsAppsUpdate operation.
/// </summary>
public sealed record ApigeeOrganizationsAppgroupsAppsUpdateRequest
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
    /// Approve or revoke the consumer key by setting this value to <c>approve</c> or <c>revoke</c>. The <c>Content-Type</c> header must be set to <c>application/octet-stream</c>, with empty body.
    /// </summary>
    public string? Action { get; init; }

    public required GoogleCloudApigeeV1AppGroupApp Body { get; init; }
}
