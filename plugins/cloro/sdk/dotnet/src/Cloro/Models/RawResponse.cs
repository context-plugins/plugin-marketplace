using System.Text.Json.Serialization;
using Cloro.Core.Models;

namespace Cloro.Models;

public record RawResponse
{
    /// <summary>
    /// Event type identifier
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public string? Type { get; init; }

    /// <summary>
    /// Resume token used to continue the ChatGPT conversation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("token")]
    public string? Token { get; init; }

    /// <summary>
    /// ChatGPT conversation identifier
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conversation_id")]
    public string? ConversationId { get; init; }

    /// <summary>
    /// Event payload describing the assistant message
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public Message? Message { get; init; }

    /// <summary>
    /// Streaming delta payload from ChatGPT
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("delta")]
    public Delta? Delta { get; init; }

    /// <summary>
    /// Why ChatGPT stopped streaming
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public string? Reason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
