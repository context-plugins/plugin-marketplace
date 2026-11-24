using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;
using GoogleAnalytics.Models.Enums;

namespace GoogleAnalytics.Models;

/// <summary>
/// Sorts by dimension values.
/// </summary>
public record GoogleAnalyticsAdminV1BetaAccessOrderByDimensionOrderBy
{
    /// <summary>
    /// A dimension name in the request to order by.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensionName")]
    public string? DimensionName { get; init; }

    /// <summary>
    /// Controls the rule for dimension value ordering.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("orderType")]
    public OrderType? OrderType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
