using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DescribeBotAliasRequest
{
    /// <summary>
    /// The identifier of the bot alias to describe.
    /// </summary>
    [JsonPropertyName("botAliasId")]
    public required string BotAliasId { get; init; }

    /// <summary>
    /// The identifier of the bot associated with the bot alias to describe.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
