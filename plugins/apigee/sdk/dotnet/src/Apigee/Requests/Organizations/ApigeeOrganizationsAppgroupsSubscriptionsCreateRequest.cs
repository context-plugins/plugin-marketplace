using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsAppgroupsSubscriptionsCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsAppgroupsSubscriptionsCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (appgroupsId).
    /// </summary>
    public required string AppgroupsId { get; init; }

    public required GoogleCloudApigeeV1AppGroupSubscription Body { get; init; }
}
