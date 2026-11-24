namespace Apigee.Requests.Organizations;

/// <summary>
/// The inputs of the ApigeeOrganizationsAppsList operation.
/// </summary>
public sealed record ApigeeOrganizationsAppsListRequest
{
    /// <summary>
    /// Resource name segment (organizationsId).
    /// </summary>
    public required string OrganizationsId { get; init; }

    /// <summary>
    /// API product.
    /// </summary>
    public string? ApiProduct { get; init; }

    /// <summary>
    /// Optional. 'apptype' is no longer available. Use a 'filter' instead.
    /// </summary>
    public string? Apptype { get; init; }

    /// <summary>
    /// Optional. Flag that specifies whether to return an expanded list of apps for the organization. Defaults to <c>false</c>.
    /// </summary>
    public bool? Expand { get; init; }

    /// <summary>
    /// Optional. The filter expression to be used to get the list of apps, where filtering can be done on developerEmail, apiProduct, consumerKey, status, appId, appName, appType and appGroup. Examples: "developerEmail=foo@bar.com", "appType=AppGroup", or "appType=Developer" "filter" is supported from ver 1.10.0 and above.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Optional. Comma-separated list of app IDs on which to filter.
    /// </summary>
    public string? Ids { get; init; }

    /// <summary>
    /// Optional. Flag that specifies whether to include credentials in the response.
    /// </summary>
    public bool? IncludeCred { get; init; }

    /// <summary>
    /// Optional. Key status of the app. Valid values include <c>approved</c> or <c>revoked</c>. Defaults to <c>approved</c>.
    /// </summary>
    public string? KeyStatus { get; init; }

    /// <summary>
    /// Optional. Count of apps a single page can have in the response. If unspecified, at most 1000 apps will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. "page_size" is supported from ver 1.10.0 and above.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. The starting index record for listing the developers. "page_token" is supported from ver 1.10.0 and above.
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// Optional. Maximum number of app IDs to return. Defaults to 1000, which is also the upper limit. To get more than 1000, use pagination with 'pageSize' and 'pageToken' parameters.
    /// </summary>
    public string? Rows { get; init; }

    /// <summary>
    /// Returns the list of apps starting from the specified app ID.
    /// </summary>
    public string? StartKey { get; init; }

    /// <summary>
    /// Optional. Filter by the status of the app. Valid values are <c>approved</c> or <c>revoked</c>. Defaults to <c>approved</c>.
    /// </summary>
    public string? Status { get; init; }
}
