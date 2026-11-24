using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Ava's response. On success, <c>answer</c> is present. The endpoint streams keep-alive whitespace while generating (to avoid proxy timeouts), so the HTTP status is committed to 200 before the answer is ready; if generation then fails, <c>answer</c> is omitted and <c>error</c> carries a message instead. Consumers should check for <c>error</c> before reading <c>answer</c>.
/// </summary>
public record AvaAskSyncResponse
{
    /// <summary>
    /// The Ava response text. Present on success.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("answer")]
    public string? Answer { get; init; }

    /// <summary>
    /// The conversation ID. Present only for non-ephemeral requests. Can be used with the delete conversation endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conversationId")]
    public string? ConversationId { get; init; }

    /// <summary>
    /// The answer ID within the conversation. Present only for non-ephemeral requests. Required for the feedback endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("answerId")]
    public string? AnswerId { get; init; }

    /// <summary>
    /// Present instead of <c>answer</c> when generation fails after the response has begun streaming (the HTTP status remains 200). A human-readable error message.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public string? Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
