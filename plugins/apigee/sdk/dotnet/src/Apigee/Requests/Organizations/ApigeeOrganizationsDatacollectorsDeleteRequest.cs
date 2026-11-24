namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsDatacollectorsDelete operation.
/// </summary>
public sealed record ApigeeOrganizationsDatacollectorsDeleteRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (datacollectorsId).
    /// </summary>
    public required string DatacollectorsId { get; init; }
}
