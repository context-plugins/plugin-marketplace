using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;
using ParallelSdk.Models.Enums;

namespace ParallelSdk.Models;

/// <summary>
/// A response from the <c>parallel</c> model. A completed response contains a
/// single assistant message whose text is annotated with URL citations
/// grounding the answer.
/// </summary>
public record ResponseModel
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("created_at")]
    public required double CreatedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public ErrorParallelAiResponsesApi? Error { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("incomplete_details")]
    public IncompleteDetails1? IncompleteDetails { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instructions")]
    public Instructions? Instructions { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public MetadataParallelAiResponsesApi? Metadata { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model")]
    public Model? Model { get; init; } = Model.Parallel;

    [JsonPropertyName("object")]
    public string Object { get; } = "response";

    [JsonPropertyName("output")]
    public required IReadOnlyList<ResponseOutputMessage> Output { get; init; }

    [JsonPropertyName("parallel_tool_calls")]
    public required bool ParallelToolCalls { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("temperature")]
    public Temperature? Temperature { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tool_choice")]
    public string? ToolChoice { get; init; } = "auto";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tools")]
    public IReadOnlyList<object>? Tools { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("top_p")]
    public TopP? TopP { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("background")]
    public Background? Background { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completed_at")]
    public CompletedAt? CompletedAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("conversation")]
    public string? Conversation { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max_output_tokens")]
    public MaxOutputTokens? MaxOutputTokens { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("max_tool_calls")]
    public MaxToolCalls? MaxToolCalls { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("moderation")]
    public Moderation1ParallelAiResponsesApi? Moderation { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previous_response_id")]
    public PreviousResponseId? PreviousResponseId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prompt")]
    public string? Prompt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prompt_cache_key")]
    public PromptCacheKey? PromptCacheKey { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("prompt_cache_retention")]
    public PromptCacheRetention1? PromptCacheRetention { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reasoning")]
    public Reasoning? Reasoning { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("safety_identifier")]
    public SafetyIdentifier? SafetyIdentifier { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("service_tier")]
    public ServiceTier1? ServiceTier { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status11ParallelAiResponsesApi? Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public Text1? Text { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("top_logprobs")]
    public TopLogprobs? TopLogprobs { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("truncation")]
    public Truncation1? Truncation { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("usage")]
    public UsageParallelAiResponsesApi? Usage { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("user")]
    public User? User { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
