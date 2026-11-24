using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Request for the chat completions endpoint.
/// <para>
/// Note that all parameters except for <c>model</c>, <c>stream</c>, and <c>response_format</c>
/// are ignored.
/// </para>
/// </summary>
public record ChatCompletionRequest
{
    /// <summary>
    /// The model to use for chat completions.
    /// </summary>
    [JsonPropertyName("model")]
    public required string Model { get; init; }

    /// <summary>
    /// The messages to use for chat completions.
    /// </summary>
    [JsonPropertyName("messages")]
    public required IReadOnlyList<ChatMessage> Messages { get; init; }

    /// <summary>
    /// Whether to stream the chat completions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stream")]
    public Stream? Stream { get; init; }

    /// <summary>
    /// The response format to use for chat completions. OpenAI compatible.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("response_format")]
    public ResponseFormat? ResponseFormat { get; init; }

    /// <summary>
    /// The maximum number of tokens to generate. Unsupported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max_tokens")]
    public MaxTokens? MaxTokens { get; init; }

    /// <summary>
    /// The temperature to use for chat completions. Unsupported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("temperature")]
    public Temperature? Temperature { get; init; }

    /// <summary>
    /// The top p to use for chat completions. Unsupported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("top_p")]
    public TopP? TopP { get; init; }

    /// <summary>
    /// The number of chat completions to generate. Unsupported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("n")]
    public N? N { get; init; }

    /// <summary>
    /// The presence penalty to use for chat completions. Unsupported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("presence_penalty")]
    public PresencePenalty? PresencePenalty { get; init; }

    /// <summary>
    /// The frequency penalty to use for chat completions. Unsupported.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("frequency_penalty")]
    public FrequencyPenalty? FrequencyPenalty { get; init; }

    /// <summary>
    /// Interaction ID from a previous chat completion to use as context.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previous_interaction_id")]
    public PreviousInteractionId? PreviousInteractionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
