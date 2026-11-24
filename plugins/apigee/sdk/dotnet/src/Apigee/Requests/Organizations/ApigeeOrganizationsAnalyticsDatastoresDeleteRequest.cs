namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsAnalyticsDatastoresDelete operation.
/// </summary>
public sealed record ApigeeOrganizationsAnalyticsDatastoresDeleteRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (datastoresId).
    /// </summary>
    public required string DatastoresId { get; init; }
}
