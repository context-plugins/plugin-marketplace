using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsAnalyticsDatastoresUpdate operation.
/// </summary>
public sealed record ApigeeOrganizationsAnalyticsDatastoresUpdateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (datastoresId).
    /// </summary>
    public required string DatastoresId { get; init; }

    public required GoogleCloudApigeeV1Datastore Body { get; init; }
}
