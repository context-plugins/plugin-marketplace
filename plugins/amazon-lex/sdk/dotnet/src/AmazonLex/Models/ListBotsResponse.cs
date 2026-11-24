using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ListBotsResponse
{
    /// <summary>
    /// Summary information for the bots that meet the filter criteria specified in the request. The length of the list is specified in the maxResults parameter of the request. If there are more bots available, the nextToken field contains a token to the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botSummaries")]
    public IReadOnlyList<BotSummary>? BotSummaries { get; init; }

    /// <summary>
    /// A token that indicates whether there are more results to return in a response to the ListBots operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListBots operation request to get the next page of results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
