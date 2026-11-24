using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ListBotAliasesResponse
{
    /// <summary>
    /// Summary information for the bot aliases that meet the filter criteria specified in the request. The length of the list is specified in the maxResults parameter of the request. If there are more aliases available, the nextToken field contains a token to get the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botAliasSummaries")]
    public IReadOnlyList<BotAliasSummary>? BotAliasSummaries { get; init; }

    /// <summary>
    /// A token that indicates whether there are more results to return in a response to the ListBotAliases operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListBotAliases operation request to get the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// The identifier of the bot associated with the aliases.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botId")]
    public string? BotId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
