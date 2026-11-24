using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record RuntimeLexDeleteSessionRequest
{
    /// <summary>
    /// The name of the bot that contains the session data.
    /// </summary>
    [JsonPropertyName("botName")]
    public required string BotName { get; init; }

    /// <summary>
    /// The alias in use for the bot that contains the session data.
    /// </summary>
    [JsonPropertyName("botAlias")]
    public required string BotAlias { get; init; }

    /// <summary>
    /// The identifier of the user associated with the session data.
    /// </summary>
    [JsonPropertyName("userId")]
    public required string UserId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
