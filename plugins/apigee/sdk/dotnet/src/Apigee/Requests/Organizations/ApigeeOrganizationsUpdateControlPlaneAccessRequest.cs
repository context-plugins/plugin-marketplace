using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsUpdateControlPlaneAccess operation.
/// </summary>
public sealed record ApigeeOrganizationsUpdateControlPlaneAccessRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// List of fields to be updated. Fields that can be updated: synchronizer_identities, analytics_publisher_identities, watcher_identities.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required GoogleCloudApigeeV1ControlPlaneAccess Body { get; init; }
}
