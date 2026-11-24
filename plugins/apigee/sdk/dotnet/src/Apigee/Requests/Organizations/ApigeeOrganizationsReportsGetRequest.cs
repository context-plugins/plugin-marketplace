namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsReportsGet operation.
/// </summary>
public sealed record ApigeeOrganizationsReportsGetRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (reportsId).
    /// </summary>
    public required string ReportsId { get; init; }
}
