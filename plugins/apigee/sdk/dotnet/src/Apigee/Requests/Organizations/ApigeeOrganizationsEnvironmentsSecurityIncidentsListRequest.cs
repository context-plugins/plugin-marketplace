namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsEnvironmentsSecurityIncidentsList operation.
/// </summary>
public sealed record ApigeeOrganizationsEnvironmentsSecurityIncidentsListRequest
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
    /// The filter expression to be used to get the list of security incidents, where filtering can be done on API Proxies. Example: filter = "api_proxy = /", "first_detected_time &gt;", "last_detected_time &lt;"
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Optional. The maximum number of incidents to return. The service may return fewer than this value. If unspecified, at most 50 incidents will be returned.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListSecurityIncident</c> call. Provide this to retrieve the subsequent page.
    /// </summary>
    public string? PageToken { get; init; }
}
