using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ConfigurationEvent
{
    /// <summary>
    /// Request-specific information passed between the client application and Amazon Lex V2. The namespace x-amz-lex: is reserved for special attributes. Don't create any request attributes for prefix x-amz-lex:.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestAttributes")]
    public IReadOnlyDictionary<string, string>? RequestAttributes { get; init; }

    /// <summary>
    /// The message that Amazon Lex V2 returns in the response can be either text or speech based on the responseContentType value. If the value is text/plain;charset=utf-8, Amazon Lex V2 returns text in the response. If the value begins with audio/, Amazon Lex V2 returns speech in the response. Amazon Lex V2 uses Amazon Polly to generate the speech using the configuration that you specified in the requestContentType parameter. For example, if you specify audio/mpeg as the value, Amazon Lex V2 returns speech in the MPEG format. If the value is audio/pcm, the speech returned is audio/pcm in 16-bit, lit
    /// </summary>
    [JsonPropertyName("responseContentType")]
    public required string ResponseContentType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionState")]
    public SessionState? SessionState { get; init; }

    /// <summary>
    /// A list of messages to send to the user. If you set the welcomeMessage field, you must also set the DialogAction structure's type field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("welcomeMessages")]
    public IReadOnlyList<RuntimeV2LexMessage>? WelcomeMessages { get; init; }

    /// <summary>
    /// Determines whether Amazon Lex V2 should send audio responses to the client application. Set this field to false when the client is operating in a playback mode where audio responses are played to the user. If the client isn't operating in playback mode, such as a text chat application, set this to true so that Amazon Lex V2 doesn't wait for the prompt to finish playing on the client.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disablePlayback")]
    public bool? DisablePlayback { get; init; }

    /// <summary>
    /// A unique identifier that your application assigns to the event. You can use this to identify events in logs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventId")]
    public string? EventId { get; init; }

    /// <summary>
    /// A timestamp set by the client of the date and time that the event was sent to Amazon Lex V2.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientTimestampMillis")]
    public int? ClientTimestampMillis { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
