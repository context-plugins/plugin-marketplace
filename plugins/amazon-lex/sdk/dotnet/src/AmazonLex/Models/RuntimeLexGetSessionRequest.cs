using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record RuntimeLexGetSessionRequest
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
    /// The ID of the client application user. Amazon Lex uses this to identify a user's conversation with your bot.
    /// </summary>
    [JsonPropertyName("userId")]
    public required string UserId { get; init; }

    /// <summary>
    /// A string used to filter the intents returned in the recentIntentSummaryView structure. When you specify a filter, only intents with their checkpointLabel field set to that string are returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("checkpointLabelFilter")]
    public string? CheckpointLabelFilter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
