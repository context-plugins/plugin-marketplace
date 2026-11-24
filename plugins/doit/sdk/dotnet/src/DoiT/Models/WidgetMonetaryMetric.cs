using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// A monetary value over a period and its comparison with the equivalent prior period.
/// <c>monthToMonthGrowthPercentage</c> and <c>monthToMonthGrowthAmount</c> are both <c>null</c> when no
/// comparable prior-period value exists, such as when prior-period spend is zero.
/// </summary>
public record WidgetMonetaryMetric
{
    /// <summary>
    /// Current-period monetary value. <c>amount</c> is a decimal string and <c>currency</c> is an ISO 4217 code.
    /// </summary>
    [JsonPropertyName("value")]
    public required Money Value { get; init; }

    /// <summary>
    /// UTC date-time range covered by the widget result. <c>endTime</c> is exclusive.
    /// </summary>
    [JsonPropertyName("period")]
    public required WidgetPeriod Period { get; init; }

    /// <summary>
    /// Percentage change from the comparable prior period, or <c>null</c> when no comparison is available.
    /// </summary>
    [JsonPropertyName("monthToMonthGrowthPercentage")]
    public required double? MonthToMonthGrowthPercentage { get; init; }

    /// <summary>
    /// Absolute monetary change from the comparable prior period, or <c>null</c> when no comparison is available.
    /// </summary>
    [JsonPropertyName("monthToMonthGrowthAmount")]
    public required Money MonthToMonthGrowthAmount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
