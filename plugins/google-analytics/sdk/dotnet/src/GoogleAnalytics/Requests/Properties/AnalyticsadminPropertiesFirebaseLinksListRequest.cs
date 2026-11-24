namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesFirebaseLinksList operation.
/// </summary>
public sealed record AnalyticsadminPropertiesFirebaseLinksListRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    /// <summary>
    /// Optional. The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListFirebaseLinks</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to <c>ListFirebaseLinks</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
