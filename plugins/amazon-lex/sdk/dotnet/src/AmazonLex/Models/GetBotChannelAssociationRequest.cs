using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record GetBotChannelAssociationRequest
{
    /// <summary>
    /// The name of the association between the bot and the channel. The name is case sensitive.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The name of the Amazon Lex bot.
    /// </summary>
    [JsonPropertyName("botName")]
    public required string BotName { get; init; }

    /// <summary>
    /// An alias pointing to the specific version of the Amazon Lex bot to which this association is being made.
    /// </summary>
    [JsonPropertyName("botAlias")]
    public required string BotAlias { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
