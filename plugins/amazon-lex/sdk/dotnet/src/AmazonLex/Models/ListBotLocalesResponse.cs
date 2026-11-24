using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ListBotLocalesResponse
{
    /// <summary>
    /// The identifier of the bot to list locales for.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botId")]
    public string? BotId { get; init; }

    /// <summary>
    /// The version of the bot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botVersion")]
    public string? BotVersion { get; init; }

    /// <summary>
    /// A token that indicates whether there are more results to return in a response to the ListBotLocales operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListBotLocales operation request to get the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// Summary information for the locales that meet the filter criteria specified in the request. The length of the list is specified in the maxResults parameter of the request. If there are more locales available, the nextToken field contains a token to get the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botLocaleSummaries")]
    public IReadOnlyList<BotLocaleSummary>? BotLocaleSummaries { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
