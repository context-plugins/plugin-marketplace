using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record CreateBotAliasRequest
{
    /// <summary>
    /// The alias to create. The name must be unique for the bot.
    /// </summary>
    [JsonPropertyName("botAliasName")]
    public required string BotAliasName { get; init; }

    /// <summary>
    /// A description of the alias. Use this description to help identify the alias.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The version of the bot that this alias points to. You can use the UpdateBotAlias operation to change the bot version associated with the alias.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botVersion")]
    public string? BotVersion { get; init; }

    /// <summary>
    /// Maps configuration information to a specific locale. You can use this parameter to specify a specific Lambda function to run different functions in different locales.
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
    /// The unique identifier of the bot that the alias applies to.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// A list of tags to add to the bot alias. You can only add tags when you create an alias, you can't use the UpdateBotAlias operation to update the tags on a bot alias. To update tags, use the TagResource operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyDictionary<string, string>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
