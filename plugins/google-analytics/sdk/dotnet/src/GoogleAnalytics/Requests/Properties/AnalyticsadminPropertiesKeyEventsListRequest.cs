namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesKeyEventsList operation.
/// </summary>
public sealed record AnalyticsadminPropertiesKeyEventsListRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    /// <summary>
    /// Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListKeyEvents</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to <c>ListKeyEvents</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
