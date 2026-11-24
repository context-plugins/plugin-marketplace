using Apigee.Models;

namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsDatacollectorsPatch operation.
/// </summary>
public sealed record ApigeeOrganizationsDatacollectorsPatchRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (datacollectorsId).
    /// </summary>
    public required string DatacollectorsId { get; init; }

    /// <summary>
    /// List of fields to be updated.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required GoogleCloudApigeeV1DataCollector Body { get; init; }
}
