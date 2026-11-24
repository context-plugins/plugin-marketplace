using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record MessageGroup
{
    [JsonPropertyName("message")]
    public required Message Message { get; init; }

    /// <summary>
    /// Message variations to send to the user. When variations are defined, Amazon Lex chooses the primary message or one of the variations to send to the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variations")]
    public IReadOnlyList<Message>? Variations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
