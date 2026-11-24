using GoogleAnalytics.Models;

namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsdataPropertiesRunRealtimeReport operation.
/// </summary>
public sealed record AnalyticsdataPropertiesRunRealtimeReportRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    public required RunRealtimeReportRequest Body { get; init; }
}
