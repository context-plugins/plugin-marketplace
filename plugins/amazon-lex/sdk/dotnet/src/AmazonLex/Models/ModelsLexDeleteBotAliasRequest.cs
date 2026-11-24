using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ModelsLexDeleteBotAliasRequest
{
    /// <summary>
    /// The name of the alias to delete. The name is case sensitive.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The name of the bot that the alias points to.
    /// </summary>
    [JsonPropertyName("botName")]
    public required string BotName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
