using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record GetBotsResponse
{
    /// <summary>
    /// An array of botMetadata objects, with one entry for each bot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bots")]
    public IReadOnlyList<BotMetadata>? Bots { get; init; }

    /// <summary>
    /// If the response is truncated, it includes a pagination token that you can specify in your next request to fetch the next page of bots.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
