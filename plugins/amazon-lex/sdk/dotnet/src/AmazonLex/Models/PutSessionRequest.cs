using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record PutSessionRequest
{
    /// <summary>
    /// The identifier of the bot that receives the session data.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The alias identifier of the bot that receives the session data.
    /// </summary>
    [JsonPropertyName("botAliasId")]
    public required string BotAliasId { get; init; }

    /// <summary>
    /// The locale where the session is in use.
    /// </summary>
    [JsonPropertyName("localeId")]
    public required string LocaleId { get; init; }

    /// <summary>
    /// The identifier of the session that receives the session data.
    /// </summary>
    [JsonPropertyName("sessionId")]
    public required string SessionId { get; init; }

    /// <summary>
    /// A list of messages to send to the user. Messages are sent in the order that they are defined in the list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("messages")]
    public IReadOnlyList<RuntimeV2LexMessage>? Messages { get; init; }

    [JsonPropertyName("sessionState")]
    public required SessionState SessionState { get; init; }

    /// <summary>
    /// Request-specific information passed between Amazon Lex V2 and the client application. The namespace x-amz-lex: is reserved for special attributes. Don't create any request attributes with the prefix x-amz-lex:.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestAttributes")]
    public IReadOnlyDictionary<string, string>? RequestAttributes { get; init; }

    /// <summary>
    /// The message that Amazon Lex V2 returns in the response can be either text or speech depending on the value of this parameter. If the value is text/plain; charset=utf-8, Amazon Lex V2 returns text in the response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("responseContentType")]
    public string? ResponseContentType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
