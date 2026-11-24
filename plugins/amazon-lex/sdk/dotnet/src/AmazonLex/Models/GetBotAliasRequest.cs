using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record GetBotAliasRequest
{
    /// <summary>
    /// The name of the bot alias. The name is case sensitive.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The name of the bot.
    /// </summary>
    [JsonPropertyName("botName")]
    public required string BotName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
