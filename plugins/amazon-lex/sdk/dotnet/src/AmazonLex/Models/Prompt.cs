using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record Prompt
{
    /// <summary>
    /// An array of objects, each of which provides a message string and its type. You can specify the message string in plain text or in Speech Synthesis Markup Language (SSML).
    /// </summary>
    [JsonPropertyName("messages")]
    public required IReadOnlyList<ModelsLexMessage> Messages { get; init; }

    /// <summary>
    /// The number of times to prompt the user for information.
    /// </summary>
    [JsonPropertyName("maxAttempts")]
    public required int MaxAttempts { get; init; }

    /// <summary>
    /// A response card. Amazon Lex uses this prompt at runtime, in the PostText API response. It substitutes session attributes and slot values for placeholders in the response card. For more information, see ex-resp-card.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("responseCard")]
    public string? ResponseCard { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
