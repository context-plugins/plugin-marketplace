using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Settings for cost forecasting on the report.
/// Historical fields choose which past data the model learns from.
/// Future fields choose how far ahead predicted costs are projected.
/// When a custom date range is set for a side, it takes precedence over the corresponding interval count.
/// futureCustomDateRange is converted to futureTimeIntervals using the report timeInterval.
/// Providing forecastSettings enables forecast (advancedAnalysis.forecast) automatically.
/// On PATCH, omit forecastSettings to leave forecasting unchanged; send forecastSettings: null to clear/disable forecasting
/// (also removes the forecast feature flag). An empty object enables forecast with default mode totals.
/// Interval counts outside the allowed min/max for the report timeInterval are rejected with a validation error that includes the allowed range.
/// </summary>
public record ExternalForecastSettings
{
    /// <summary>
    /// Forecast granularity mode.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mode")]
    public Mode1? Mode { get; init; } = Mode1.Totals;

    /// <summary>
    /// How many past timeInterval periods of data the model learns from.
    /// Allowed ranges by timeInterval: hour 2-1000, day 2-500, week 2-100, month 2-36, quarter 2-12, year 2-6.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("historicalTimeIntervals")]
    public long? HistoricalTimeIntervals { get; init; }

    /// <summary>
    /// How many future timeInterval periods of predicted costs to project.
    /// Allowed ranges by timeInterval: hour 1-1000, day 1-100, week 1-52, month 1-12, quarter 1-4, year 1-3.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("futureTimeIntervals")]
    public long? FutureTimeIntervals { get; init; }

    /// <summary>
    /// Past date range of billed data the model learns from. Takes precedence over historicalTimeIntervals.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("historicalCustomDateRange")]
    public ExternalForecastDateRange? HistoricalCustomDateRange { get; init; }

    /// <summary>
    /// Date range for how far ahead to project predicted costs. Takes precedence over futureTimeIntervals.
    /// The range must resolve to a futureTimeIntervals count within the allowed min/max for the report timeInterval.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("futureCustomDateRange")]
    public ExternalForecastDateRange? FutureCustomDateRange { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
