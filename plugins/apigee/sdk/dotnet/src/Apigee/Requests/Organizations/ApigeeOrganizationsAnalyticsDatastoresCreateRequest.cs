using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsAnalyticsDatastoresCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsAnalyticsDatastoresCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    public required GoogleCloudApigeeV1Datastore Body { get; init; }
}
