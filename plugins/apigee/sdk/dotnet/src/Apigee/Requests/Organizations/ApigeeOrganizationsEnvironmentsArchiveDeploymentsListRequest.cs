namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsArchiveDeploymentsList operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsArchiveDeploymentsListRequest
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
    /// Optional. An optional query used to return a subset of Archive Deployments using the semantics defined in https://google.aip.dev/160.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Optional. Maximum number of Archive Deployments to return. If unspecified, at most 25 deployments will be returned.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. Page token, returned from a previous ListArchiveDeployments call, that you can use to retrieve the next page.
    /// </summary>
    public string? PageToken { get; init; }
}
