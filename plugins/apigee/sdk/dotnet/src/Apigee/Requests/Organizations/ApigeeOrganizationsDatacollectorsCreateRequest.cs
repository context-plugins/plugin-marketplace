using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsDatacollectorsCreate operation.
/// </summary>
public sealed record ApigeeOrganizationsDatacollectorsCreateRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// ID of the data collector. Overrides any ID in the data collector resource. Must be a string beginning with <c>dc_</c> that contains only letters, numbers, and underscores.
    /// </summary>
    public string? DataCollectorId { get; init; }

    public required GoogleCloudApigeeV1DataCollector Body { get; init; }
}
