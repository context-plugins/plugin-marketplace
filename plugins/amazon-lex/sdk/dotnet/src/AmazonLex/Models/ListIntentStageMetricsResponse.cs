using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ListIntentStageMetricsResponse
{
    /// <summary>
    /// The identifier for the bot for which you retrieved intent stage metrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botId")]
    public string? BotId { get; init; }

    /// <summary>
    /// The results for the intent stage metrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("results")]
    public IReadOnlyList<AnalyticsIntentStageResult>? Results { get; init; }

    /// <summary>
    /// If the response from the ListIntentStageMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use the returned token in the nextToken parameter of a ListIntentStageMetrics request to return the next page of results. For a complete set of results, call the ListIntentStageMetrics operation until the nextToken returned in the response is null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
