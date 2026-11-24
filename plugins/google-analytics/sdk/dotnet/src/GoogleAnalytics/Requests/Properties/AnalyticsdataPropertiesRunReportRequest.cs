using GoogleAnalytics.Models;

namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsdataPropertiesRunReport operation.
/// </summary>
public sealed record AnalyticsdataPropertiesRunReportRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    public required RunReportRequest Body { get; init; }
}
