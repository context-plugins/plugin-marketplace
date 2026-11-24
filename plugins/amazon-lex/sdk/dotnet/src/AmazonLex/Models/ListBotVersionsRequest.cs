using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ListBotVersionsRequest
{
    /// <summary>
    /// The identifier of the bot to list versions for.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sortBy")]
    public BotVersionSortBy? SortBy { get; init; }

    /// <summary>
    /// The maximum number of versions to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxResults")]
    public int? MaxResults { get; init; }

    /// <summary>
    /// If the response to the ListBotVersion operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
