using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsSetSyncAuthorization operation.
/// </summary>
public sealed record ApigeeOrganizationsSetSyncAuthorizationRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    public required GoogleCloudApigeeV1SyncAuthorization Body { get; init; }
}
