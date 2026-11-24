namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsAnalyticsExportsGet operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsAnalyticsExportsGetRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (environmentsId).
    /// </summary>
    public required string EnvironmentsId { get; init; }

    /// <summary>
    /// Resource name segment (exportsId).
    /// </summary>
    public required string ExportsId { get; init; }
}
