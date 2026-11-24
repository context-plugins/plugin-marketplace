namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsReportsList operation.
/// </summary>
public sealed record ApigeeOrganizationsReportsListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Set to 'true' to get expanded details about each custom report.
    /// </summary>
    public bool? Expand { get; init; }
}
