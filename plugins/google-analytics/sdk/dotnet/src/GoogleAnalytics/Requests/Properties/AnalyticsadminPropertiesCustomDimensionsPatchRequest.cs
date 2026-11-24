using GoogleAnalytics.Models;

namespace GoogleAnalytics.Requests.Properties;

/// <summary>
/// The inputs of the AnalyticsadminPropertiesCustomDimensionsPatch operation.
/// </summary>
public sealed record AnalyticsadminPropertiesCustomDimensionsPatchRequest
{
    /// <summary>
    /// Resource name segment (propertiesId).
    /// </summary>
    public required string PropertiesId { get; init; }

    /// <summary>
    /// Resource name segment (customDimensionsId).
    /// </summary>
    public required string CustomDimensionsId { get; init; }

    /// <summary>
    /// Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
    /// </summary>
    public string? UpdateMask { get; init; }

    public required GoogleAnalyticsAdminV1BetaCustomDimension Body { get; init; }
}
