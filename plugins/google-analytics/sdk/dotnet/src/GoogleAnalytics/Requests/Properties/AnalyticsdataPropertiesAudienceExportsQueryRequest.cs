using GoogleAnalytics.Models;

namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsdataPropertiesAudienceExportsQuery operation.
/// </summary>
public sealed record AnalyticsdataPropertiesAudienceExportsQueryRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    /// <summary>
    /// Resource name segment (audienceExportsId).
    /// </summary>
    public required string AudienceExportsId { get; init; }

    public required QueryAudienceExportRequest Body { get; init; }
}
