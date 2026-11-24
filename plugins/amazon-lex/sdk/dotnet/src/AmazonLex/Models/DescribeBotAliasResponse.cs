using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record DescribeBotAliasResponse
{
    /// <summary>
    /// The identifier of the bot alias.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botAliasId")]
    public string? BotAliasId { get; init; }

    /// <summary>
    /// The name of the bot alias.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botAliasName")]
    public string? BotAliasName { get; init; }

    /// <summary>
    /// The description of the bot alias.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The version of the bot associated with the bot alias.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botVersion")]
    public string? BotVersion { get; init; }

    /// <summary>
    /// The locale settings that are unique to the alias.
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
    /// A list of events that affect a bot alias. For example, an event is recorded when the version that the alias points to changes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botAliasHistoryEvents")]
    public IReadOnlyList<BotAliasHistoryEvent>? BotAliasHistoryEvents { get; init; }

    /// <summary>
    /// The current status of the alias. When the alias is Available, the alias is ready for use with your bot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botAliasStatus")]
    public BotAliasStatus3? BotAliasStatus { get; init; }

    /// <summary>
    /// The identifier of the bot associated with the bot alias.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botId")]
    public string? BotId { get; init; }

    /// <summary>
    /// A timestamp of the date and time that the alias was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creationDateTime")]
    public DateTimeOffset? CreationDateTime { get; init; }

    /// <summary>
    /// A timestamp of the date and time that the alias was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastUpdatedDateTime")]
    public DateTimeOffset? LastUpdatedDateTime { get; init; }

    /// <summary>
    /// A list of the networks to which the bot alias you described belongs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parentBotNetworks")]
    public IReadOnlyList<ParentBotNetwork>? ParentBotNetworks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
