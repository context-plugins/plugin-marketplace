using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DescribeBotAnalyzerRecommendationRequest
{
    /// <summary>
    /// The unique identifier of the bot.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The unique identifier of the analysis request.
    /// </summary>
    [JsonPropertyName("botAnalyzerRequestId")]
    public required string BotAnalyzerRequestId { get; init; }

    /// <summary>
    /// If the response from a previous request was truncated, the nextToken value is used to retrieve the next page of recommendations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// The maximum number of recommendations to return in the response. The default is 5.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxResults")]
    public int? MaxResults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
