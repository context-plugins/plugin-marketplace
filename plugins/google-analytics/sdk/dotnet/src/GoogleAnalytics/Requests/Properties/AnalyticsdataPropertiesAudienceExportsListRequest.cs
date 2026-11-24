namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsdataPropertiesAudienceExportsList operation.
/// </summary>
public sealed record AnalyticsdataPropertiesAudienceExportsListRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    /// <summary>
    /// Optional. The maximum number of audience exports to return. The service may return fewer than this value. If unspecified, at most 200 audience exports will be returned. The maximum value is 1000 (higher values will be coerced to the maximum).
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. A page token, received from a previous <c>ListAudienceExports</c> call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to <c>ListAudienceExports</c> must match the call that provided the page token.
    /// </summary>
    public string? PageToken { get; init; }
}
