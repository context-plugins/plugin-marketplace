using GoogleAnalytics.Models;

namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsdataPropertiesCheckCompatibility operation.
/// </summary>
public sealed record AnalyticsdataPropertiesCheckCompatibilityRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    public required CheckCompatibilityRequest Body { get; init; }
}
