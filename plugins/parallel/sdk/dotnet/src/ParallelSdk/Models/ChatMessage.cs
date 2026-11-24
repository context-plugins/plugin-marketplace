using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models;

/// <summary>
/// Chat message for OpenAI API.
/// </summary>
public record ChatMessage
{
    /// <summary>
    /// The role of the chat message.
    /// </summary>
    [JsonPropertyName("role")]
    public required Role1 Role { get; init; }

    /// <summary>
    /// The content of the chat message.
    /// </summary>
    [JsonPropertyName("content")]
    public required string Content { get; init; }

    /// <summary>
    /// An optional name for the participant. Provides the model information to differentiate between participants of the same role.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public Name2? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
