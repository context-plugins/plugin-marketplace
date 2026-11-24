using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ListAggregatedUtterancesResponse
{
    /// <summary>
    /// The identifier of the bot that contains the utterances.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botId")]
    public string? BotId { get; init; }

    /// <summary>
    /// The identifier of the bot alias that contains the utterances. If you specified the bot version, the bot alias ID isn't returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botAliasId")]
    public string? BotAliasId { get; init; }

    /// <summary>
    /// The identifier of the bot version that contains the utterances. If you specified the bot alias, the bot version isn't returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botVersion")]
    public string? BotVersion { get; init; }

    /// <summary>
    /// The identifier of the language and locale that the utterances are in.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localeId")]
    public string? LocaleId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aggregationDuration")]
    public UtteranceAggregationDuration? AggregationDuration { get; init; }

    /// <summary>
    /// The date and time that the aggregation window begins. Only data collected after this time is returned in the results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aggregationWindowStartTime")]
    public DateTimeOffset? AggregationWindowStartTime { get; init; }

    /// <summary>
    /// The date and time that the aggregation window ends. Only data collected between the start time and the end time are returned in the results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aggregationWindowEndTime")]
    public DateTimeOffset? AggregationWindowEndTime { get; init; }

    /// <summary>
    /// The last date and time that the aggregated data was collected. The time period depends on the length of the aggregation window. Hours - for 1 hour time window, every half hour; otherwise every hour. Days - every 6 hours Weeks - for a one week time window, every 12 hours; otherwise, every day
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aggregationLastRefreshedDateTime")]
    public DateTimeOffset? AggregationLastRefreshedDateTime { get; init; }

    /// <summary>
    /// Summaries of the aggregated utterance data. Each response contains information about the number of times that the utterance was seen during the time period, whether it was detected or missed, and when it was seen during the time period.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("aggregatedUtterancesSummaries")]
    public IReadOnlyList<AggregatedUtterancesSummary>? AggregatedUtterancesSummaries { get; init; }

    /// <summary>
    /// A token that indicates whether there are more results to return in a response to the ListAggregatedUtterances operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListAggregatedUtterances operation request to get the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
