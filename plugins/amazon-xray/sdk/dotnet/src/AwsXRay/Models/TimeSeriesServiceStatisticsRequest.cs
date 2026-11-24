using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record TimeSeriesServiceStatisticsRequest
{
    /// <summary>
    /// The start of the time frame for which to aggregate statistics.
    /// </summary>
    [JsonPropertyName("StartTime")]
    public required DateTimeOffset StartTime { get; init; }

    /// <summary>
    /// The end of the time frame for which to aggregate statistics.
    /// </summary>
    [JsonPropertyName("EndTime")]
    public required DateTimeOffset EndTime { get; init; }

    /// <summary>
    /// The case-sensitive name of the group for which to pull statistics from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GroupName")]
    public string? GroupName { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the group for which to pull statistics from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GroupARN")]
    public string? GroupArn { get; init; }

    /// <summary>
    /// A filter expression defining entities that will be aggregated for statistics. Supports ID, service, and edge functions. If no selector expression is specified, edge statistics are returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EntitySelectorExpression")]
    public string? EntitySelectorExpression { get; init; }

    /// <summary>
    /// Aggregation period in seconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Period")]
    public int? Period { get; init; }

    /// <summary>
    /// The forecasted high and low fault count values. Forecast enabled requests require the EntitySelectorExpression ID be provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ForecastStatistics")]
    public bool? ForecastStatistics { get; init; }

    /// <summary>
    /// Pagination token.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
