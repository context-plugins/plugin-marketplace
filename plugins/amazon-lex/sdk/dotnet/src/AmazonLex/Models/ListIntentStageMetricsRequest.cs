using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ListIntentStageMetricsRequest
{
    /// <summary>
    /// The identifier for the bot for which you want to retrieve intent stage metrics.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The date and time that marks the beginning of the range of time for which you want to see intent stage metrics.
    /// </summary>
    [JsonPropertyName("startDateTime")]
    public required DateTimeOffset StartDateTime { get; init; }

    /// <summary>
    /// The date and time that marks the end of the range of time for which you want to see intent stage metrics.
    /// </summary>
    [JsonPropertyName("endDateTime")]
    public required DateTimeOffset EndDateTime { get; init; }

    /// <summary>
    /// A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to return, and the method by which to organize the results.
    /// </summary>
    [JsonPropertyName("metrics")]
    public required IReadOnlyList<AnalyticsIntentStageMetric> Metrics { get; init; }

    /// <summary>
    /// A list of objects, each of which contains specifications for organizing the results by time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("binBy")]
    public IReadOnlyList<AnalyticsBinBySpecification>? BinBy { get; init; }

    /// <summary>
    /// A list of objects, each of which specifies how to group the results. You can group by the following criteria: IntentStageName – The name of the intent stage. SwitchedToIntent – The intent to which the conversation was switched (if any).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("groupBy")]
    public IReadOnlyList<AnalyticsIntentStageGroupBySpecification>? GroupBy { get; init; }

    /// <summary>
    /// A list of objects, each of which describes a condition by which you want to filter the results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filters")]
    public IReadOnlyList<AnalyticsIntentStageFilter>? Filters { get; init; }

    /// <summary>
    /// The maximum number of results to return in each page of results. If there are fewer results than the maximum page size, only the actual number of results are returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxResults")]
    public int? MaxResults { get; init; }

    /// <summary>
    /// If the response from the ListIntentStageMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use the returned token in the nextToken parameter of a ListIntentStageMetrics request to return the next page of results. For a complete set of results, call the ListIntentStageMetrics operation until the nextToken returned in the response is null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
