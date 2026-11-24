using GoogleAnalytics.Models;

namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesConversionEventsPatch operation.
/// </summary>
public sealed record AnalyticsadminPropertiesConversionEventsPatchRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    /// <summary>
    /// Resource name segment (conversionEventsId).
    /// </summary>
    public required string ConversionEventsId { get; init; }

    /// <summary>
    /// Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required GoogleAnalyticsAdminV1BetaConversionEvent Body { get; init; }
}
