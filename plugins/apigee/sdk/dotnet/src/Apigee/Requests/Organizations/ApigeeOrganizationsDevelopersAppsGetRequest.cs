namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsDevelopersAppsGet operation.
/// </summary>
public sealed record ApigeeOrganizationsDevelopersAppsGetRequest
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

    /// <summary>
    /// <b>Note</b>: Must be used in conjunction with the <c>query</c> parameter. Set to <c>apiresources</c> to return the number of API resources that have been approved for access by a developer app in the specified Apigee organization.
    /// </summary>
    public string? Entity { get; init; }

    /// <summary>
    /// <b>Note</b>: Must be used in conjunction with the <c>entity</c> parameter. Set to <c>count</c> to return the number of API resources that have been approved for access by a developer app in the specified Apigee organization.
    /// </summary>
    public string? Query { get; init; }
}
