using GoogleAnalytics.Models;

namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsdataPropertiesAudienceExportsCreate operation.
/// </summary>
public sealed record AnalyticsdataPropertiesAudienceExportsCreateRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    public required AudienceExport Body { get; init; }
}
