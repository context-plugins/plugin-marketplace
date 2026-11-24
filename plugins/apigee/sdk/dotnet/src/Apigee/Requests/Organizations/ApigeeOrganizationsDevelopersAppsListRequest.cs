namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsDevelopersAppsList operation.
/// </summary>
public sealed record ApigeeOrganizationsDevelopersAppsListRequest
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
    /// Number of developer apps to return in the API call. Use with the <c>startKey</c> parameter to provide more targeted filtering. The limit is 1000.
    /// </summary>
    public string? Count { get; init; }

    /// <summary>
    /// Optional. Specifies whether to expand the results. Set to <c>true</c> to expand the results. This query parameter is not valid if you use the <c>count</c> or <c>startKey</c> query parameters. <b>Note</b>: If set to <c>true</c>, the <c>apigee.developerapps.get</c> permission is required.
    /// </summary>
    public bool? Expand { get; init; }

    /// <summary>
    /// Optional. Specifies whether to expand the results in shallow mode. Set to <c>true</c> to expand the results in shallow mode. <b>Note</b>: If set to <c>true</c>, the <c>apigee.developerapps.get</c> permission is required.
    /// </summary>
    public bool? ShallowExpand { get; init; }

    /// <summary>
    /// <b>Note</b>: Must be used in conjunction with the <c>count</c> parameter. Name of the developer app from which to start displaying the list of developer apps. For example, if you're returning 50 developer apps at a time (using the <c>count</c> query parameter), you can view developer apps 50-99 by entering the name of the 50th developer app. The developer app name is case sensitive.
    /// </summary>
    public string? StartKey { get; init; }
}
