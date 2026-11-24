using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// An expression to filter dimension or metric values.
/// </summary>
public record GoogleAnalyticsAdminV1BetaAccessFilter
{
    /// <summary>
    /// A filter for two values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("betweenFilter")]
    public GoogleAnalyticsAdminV1BetaAccessBetweenFilter2? BetweenFilter { get; init; }

    /// <summary>
    /// A filter for numeric or date values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("numericFilter")]
    public GoogleAnalyticsAdminV1BetaAccessNumericFilter2? NumericFilter { get; init; }

    /// <summary>
    /// A filter for in list values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inListFilter")]
    public GoogleAnalyticsAdminV1BetaAccessInListFilter1? InListFilter { get; init; }

    /// <summary>
    /// The dimension name or metric name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fieldName")]
    public string? FieldName { get; init; }

    /// <summary>
    /// Strings related filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stringFilter")]
    public GoogleAnalyticsAdminV1BetaAccessStringFilter2? StringFilter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
