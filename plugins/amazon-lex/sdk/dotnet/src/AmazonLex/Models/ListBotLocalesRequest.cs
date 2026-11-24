using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ListBotLocalesRequest
{
    /// <summary>
    /// The identifier of the bot to list locales for.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The version of the bot to list locales for.
    /// </summary>
    [JsonPropertyName("botVersion")]
    public required string BotVersion { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sortBy")]
    public BotLocaleSortBy? SortBy { get; init; }

    /// <summary>
    /// Provides the specification for a filter used to limit the response to only those locales that match the filter specification. You can only specify one filter and one value to filter on.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filters")]
    public IReadOnlyList<BotLocaleFilter>? Filters { get; init; }

    /// <summary>
    /// The maximum number of aliases to return in each page of results. If there are fewer results than the max page size, only the actual number of results are returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxResults")]
    public int? MaxResults { get; init; }

    /// <summary>
    /// If the response from the ListBotLocales operation contains more results than specified in the maxResults parameter, a token is returned in the response. Use that token as the nextToken parameter to return the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
