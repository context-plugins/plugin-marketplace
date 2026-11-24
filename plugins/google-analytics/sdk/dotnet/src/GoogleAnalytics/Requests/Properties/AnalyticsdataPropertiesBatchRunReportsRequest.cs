using GoogleAnalytics.Models;

namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsdataPropertiesBatchRunReports operation.
/// </summary>
public sealed record AnalyticsdataPropertiesBatchRunReportsRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    public required BatchRunReportsRequest Body { get; init; }
}
