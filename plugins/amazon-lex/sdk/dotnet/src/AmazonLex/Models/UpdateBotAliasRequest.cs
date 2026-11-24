using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record UpdateBotAliasRequest
{
    /// <summary>
    /// The unique identifier of the bot alias.
    /// </summary>
    [JsonPropertyName("botAliasId")]
    public required string BotAliasId { get; init; }

    /// <summary>
    /// The new name to assign to the bot alias.
    /// </summary>
    [JsonPropertyName("botAliasName")]
    public required string BotAliasName { get; init; }

    /// <summary>
    /// The new description to assign to the bot alias.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The new bot version to assign to the bot alias.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botVersion")]
    public string? BotVersion { get; init; }

    /// <summary>
    /// The new Lambda functions to use in each locale for the bot alias.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botAliasLocaleSettings")]
    public IReadOnlyDictionary<string, BotAliasLocaleSettings>? BotAliasLocaleSettings { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conversationLogSettings")]
    public ConversationLogSettings? ConversationLogSettings { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sentimentAnalysisSettings")]
    public SentimentAnalysisSettings? SentimentAnalysisSettings { get; init; }

    /// <summary>
    /// The identifier of the bot with the updated alias.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
