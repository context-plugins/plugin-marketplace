namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsAnalyticsDatastoresGet operation.
/// </summary>
public sealed record ApigeeOrganizationsAnalyticsDatastoresGetRequest
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
