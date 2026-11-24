using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ResponseSpecification
{
    /// <summary>
    /// A collection of responses that Amazon Lex can send to the user. Amazon Lex chooses the actual response to send at runtime.
    /// </summary>
    [JsonPropertyName("messageGroups")]
    public required IReadOnlyList<MessageGroup> MessageGroups { get; init; }

    /// <summary>
    /// Indicates whether the user can interrupt a speech response from Amazon Lex.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowInterrupt")]
    public bool? AllowInterrupt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
