namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsTraceConfigOverridesList operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsTraceConfigOverridesListRequest
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
    /// Maximum number of trace configuration overrides to return. If not specified, the maximum number returned is 25. The maximum number cannot exceed 100.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// A page token, returned from a previous <c>ListTraceConfigOverrides</c> call. Token value that can be used to retrieve the subsequent page. When paginating, all other parameters provided to <c>ListTraceConfigOverrides</c> must match those specified in the call to obtain the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
