using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ConversationLogsDataSource
{
    /// <summary>
    /// The bot Id from the conversation logs.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The bot alias Id from the conversation logs.
    /// </summary>
    [JsonPropertyName("botAliasId")]
    public required string BotAliasId { get; init; }

    /// <summary>
    /// The locale Id of the conversation log.
    /// </summary>
    [JsonPropertyName("localeId")]
    public required string LocaleId { get; init; }

    [JsonPropertyName("filter")]
    public required ConversationLogsDataSourceFilterBy Filter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
