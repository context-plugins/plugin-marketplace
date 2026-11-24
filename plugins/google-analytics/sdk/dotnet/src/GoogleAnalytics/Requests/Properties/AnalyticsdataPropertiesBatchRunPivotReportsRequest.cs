using GoogleAnalytics.Models;

namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsdataPropertiesBatchRunPivotReports operation.
/// </summary>
public sealed record AnalyticsdataPropertiesBatchRunPivotReportsRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    public required BatchRunPivotReportsRequest Body { get; init; }
}
