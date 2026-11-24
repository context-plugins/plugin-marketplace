using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record GetSessionRequest
{
    /// <summary>
    /// The identifier of the bot that contains the session data.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The alias identifier in use for the bot that contains the session data.
    /// </summary>
    [JsonPropertyName("botAliasId")]
    public required string BotAliasId { get; init; }

    /// <summary>
    /// The locale where the session is in use.
    /// </summary>
    [JsonPropertyName("localeId")]
    public required string LocaleId { get; init; }

    /// <summary>
    /// The identifier of the session to return.
    /// </summary>
    [JsonPropertyName("sessionId")]
    public required string SessionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
