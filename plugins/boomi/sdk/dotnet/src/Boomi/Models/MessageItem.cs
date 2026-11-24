using System.Collections.Generic;
using System.Text.Json.Serialization;
using Boomi.Core.Models;

namespace Boomi.Models;

/// <summary>
/// A single message in multi-message mode.
/// </summary>
public record MessageItem
{
    /// <summary>
    /// The message content. May be plain text, JSON, or XML encoded as a string.
    /// </summary>
    [JsonPropertyName("payload")]
    public required string Payload { get; init; }

    /// <summary>
    /// Optional custom metadata key-value pairs associated with this message.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("properties")]
    public IReadOnlyDictionary<string, string>? Properties { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
