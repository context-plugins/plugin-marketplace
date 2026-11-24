using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record TimeSeriesServiceStatistics
{
    /// <summary>
    /// Timestamp of the window for which statistics are aggregated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Timestamp")]
    public DateTimeOffset? Timestamp { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EdgeSummaryStatistics")]
    public EdgeStatistics? EdgeSummaryStatistics { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ServiceSummaryStatistics")]
    public ServiceStatistics? ServiceSummaryStatistics { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ServiceForecastStatistics")]
    public ForecastStatistics? ServiceForecastStatistics { get; init; }

    /// <summary>
    /// The response time histogram for the selected entities.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ResponseTimeHistogram")]
    public IReadOnlyList<HistogramEntry>? ResponseTimeHistogram { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
