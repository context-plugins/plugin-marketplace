using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Computed widget result. The populated property corresponds to <c>kind</c>.
/// </summary>
public record WidgetResult
{
    /// <summary>
    /// A monetary value over a period and its comparison with the equivalent prior period.
    /// <c>monthToMonthGrowthPercentage</c> and <c>monthToMonthGrowthAmount</c> are both <c>null</c> when no
    /// comparable prior-period value exists, such as when prior-period spend is zero.
    /// </summary>
    [JsonPropertyName("monetaryMetric")]
    public required WidgetMonetaryMetric MonetaryMetric { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
