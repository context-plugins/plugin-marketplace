using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record Statement
{
    /// <summary>
    /// A collection of message objects.
    /// </summary>
    [JsonPropertyName("messages")]
    public required IReadOnlyList<ModelsLexMessage> Messages { get; init; }

    /// <summary>
    /// At runtime, if the client is using the PostText API, Amazon Lex includes the response card in the response. It substitutes all of the session attributes and slot values for placeholders in the response card.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("responseCard")]
    public string? ResponseCard { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
