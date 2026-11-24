namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsDevelopersAppsDelete operation.
/// </summary>
public sealed record ApigeeOrganizationsDevelopersAppsDeleteRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// Resource name segment (developersId).
    /// </summary>
    public required string DevelopersId { get; init; }

    /// <summary>
    /// Resource name segment (appsId).
    /// </summary>
    public required string AppsId { get; init; }
}
