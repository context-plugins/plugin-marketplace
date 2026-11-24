using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record PutSessionResponse
{
    /// <summary>
    /// The type of response. Same as the type specified in the responseContentType field in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contentType")]
    public string? ContentType { get; init; }

    /// <summary>
    /// A list of messages that were last sent to the user. The messages are ordered based on how you return the messages from you Lambda function or the order that the messages are defined in the bot.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("messages")]
    public string? Messages { get; init; }

    /// <summary>
    /// A base-64-encoded gzipped field that represents the current state of the dialog between the user and the bot. Use this to determine the progress of the conversation and what the next action may be.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionState")]
    public string? SessionState { get; init; }

    /// <summary>
    /// A base-64-encoded gzipped field that provides request-specific information passed between the client application and Amazon Lex V2. These are the same as the requestAttribute parameter in the call to the PutSession operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestAttributes")]
    public string? RequestAttributes { get; init; }

    /// <summary>
    /// The identifier of the session that received the data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionId")]
    public string? SessionId { get; init; }

    /// <summary>
    /// If the requested content type was audio, the audio version of the message to convey to the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("audioStream")]
    public string? AudioStream { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
