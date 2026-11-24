using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ListSessionMetricsResponse
{
    /// <summary>
    /// The identifier for the bot for which you retrieved session metrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botId")]
    public string? BotId { get; init; }

    /// <summary>
    /// The results for the session metrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("results")]
    public IReadOnlyList<AnalyticsSessionResult>? Results { get; init; }

    /// <summary>
    /// If the response from the ListSessionMetrics operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use the returned token in the nextToken parameter of a ListSessionMetrics request to return the next page of results. For a complete set of results, call the ListSessionMetrics operation until the nextToken returned in the response is null.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
