using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record StartConversationRequest
{
    /// <summary>
    /// The identifier of the bot to process the request.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The alias identifier in use for the bot that processes the request.
    /// </summary>
    [JsonPropertyName("botAliasId")]
    public required string BotAliasId { get; init; }

    /// <summary>
    /// The locale where the session is in use.
    /// </summary>
    [JsonPropertyName("localeId")]
    public required string LocaleId { get; init; }

    /// <summary>
    /// The identifier of the user session that is having the conversation.
    /// </summary>
    [JsonPropertyName("sessionId")]
    public required string SessionId { get; init; }

    /// <summary>
    /// The conversation type that you are using the Amazon Lex V2. If the conversation mode is AUDIO you can send both audio and DTMF information. If the mode is TEXT you can only send text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conversationMode")]
    public ConversationMode? ConversationMode { get; init; }

    /// <summary>
    /// Exactly one member is set.
    /// </summary>
    [JsonPropertyName("requestEventStream")]
    public required StartConversationRequestEventStream RequestEventStream { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
