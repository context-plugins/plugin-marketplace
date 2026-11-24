using GoogleAnalytics.Models;

namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsdataPropertiesRunPivotReport operation.
/// </summary>
public sealed record AnalyticsdataPropertiesRunPivotReportRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    public required RunPivotReportRequest Body { get; init; }
}
