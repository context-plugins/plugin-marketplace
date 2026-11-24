namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsAppsGet operation.
/// </summary>
public sealed record ApigeeOrganizationsAppsGetRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (appsId).
    /// </summary>
    public required string AppsId { get; init; }
}
