using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record PostTextRequest
{
    /// <summary>
    /// The name of the Amazon Lex bot.
    /// </summary>
    [JsonPropertyName("botName")]
    public required string BotName { get; init; }

    /// <summary>
    /// The alias of the Amazon Lex bot.
    /// </summary>
    [JsonPropertyName("botAlias")]
    public required string BotAlias { get; init; }

    /// <summary>
    /// The ID of the client application user. Amazon Lex uses this to identify a user's conversation with your bot. At runtime, each request must contain the userID field. To decide the user ID to use for your application, consider the following factors. The userID field must not contain any personally identifiable information of the user, for example, name, personal identification numbers, or other end user personal information. If you want a user to start a conversation on one device and continue on another device, use a user-specific identifier. If you want the same user to be able to have two ind
    /// </summary>
    [JsonPropertyName("userId")]
    public required string UserId { get; init; }

    /// <summary>
    /// Application-specific information passed between Amazon Lex and a client application. For more information, see Setting Session Attributes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionAttributes")]
    public IReadOnlyDictionary<string, string>? SessionAttributes { get; init; }

    /// <summary>
    /// Request-specific information passed between Amazon Lex and a client application. The namespace x-amz-lex: is reserved for special attributes. Don't create any request attributes with the prefix x-amz-lex:. For more information, see Setting Request Attributes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestAttributes")]
    public IReadOnlyDictionary<string, string>? RequestAttributes { get; init; }

    /// <summary>
    /// The text that the user entered (Amazon Lex interprets this text).
    /// </summary>
    [JsonPropertyName("inputText")]
    public required string InputText { get; init; }

    /// <summary>
    /// A list of contexts active for the request. A context can be activated when a previous intent is fulfilled, or by including the context in the request, If you don't specify a list of contexts, Amazon Lex will use the current list of contexts for the session. If you specify an empty list, all contexts for the session are cleared.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("activeContexts")]
    public IReadOnlyList<RuntimeLexActiveContext>? ActiveContexts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
