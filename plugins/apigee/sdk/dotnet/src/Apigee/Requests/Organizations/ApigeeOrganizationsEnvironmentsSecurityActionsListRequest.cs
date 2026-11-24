namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsSecurityActionsList operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsSecurityActionsListRequest
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
    /// The filter expression to filter List results. https://google.aip.dev/160. Allows for filtering over: state and api_proxies. E.g.: state = ACTIVE AND apiProxies:foo. Filtering by action is not supported https://github.com/aip-dev/google.aip.dev/issues/624
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// The maximum number of SecurityActions to return. If unspecified, at most 50 SecurityActions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// A page token, received from a previous <c>ListSecurityActions</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to <c>ListSecurityActions</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
