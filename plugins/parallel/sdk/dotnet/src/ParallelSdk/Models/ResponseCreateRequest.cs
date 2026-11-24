using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// Request body for the Responses API (<c>POST /v1/responses</c>).
/// <para>
/// OpenAI-Responses-compatible: point a standard OpenAI client at
/// <c>https://api.parallel.ai/v1</c> with your Parallel API key and set <c>model</c> to
/// <c>parallel</c>. The fields below are the ones Parallel acts on; other OpenAI
/// request fields (<c>tools</c>, <c>tool_choice</c>, <c>temperature</c>, <c>top_p</c>,
/// <c>max_output_tokens</c>, <c>parallel_tool_calls</c>, <c>truncation</c>, <c>store</c>, <c>user</c>,
/// <c>include</c>) are accepted for compatibility but have no effect.
/// </para>
/// </summary>
public record ResponseCreateRequest
{
    /// <summary>
    /// The model to run. <c>parallel</c> is the only supported value (matched case-insensitively); any other value is rejected. To trade response time for answer quality, set <c>reasoning.effort</c> (low/medium/high) rather than changing the model name.
    /// </summary>
    [JsonPropertyName("model")]
    public required string Model { get; init; }

    /// <summary>
    /// The input to generate a response for: a plain string, or a list of role/content messages that includes at least one <c>user</c> message. Must be non-empty, and only text content is supported. <c>input</c> and <c>instructions</c> together may total at most 20,000 characters.
    /// </summary>
    [JsonPropertyName("input")]
    public required Input1ParallelAiResponsesApi Input { get; init; }

    /// <summary>
    /// System instructions for the model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instructions")]
    public Instructions1? Instructions { get; init; }

    /// <summary>
    /// ID of a previous response to use as conversation context.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previous_response_id")]
    public PreviousResponseId1? PreviousResponseId { get; init; }

    /// <summary>
    /// Whether to stream the response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stream")]
    public Stream? Stream { get; init; }

    /// <summary>
    /// Configuration for text output, including structured output.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public Text2? Text { get; init; }

    /// <summary>
    /// Arbitrary key-value pairs, echoed back on the Response object. Useful for tagging requests. At most 16 keys; keys up to 64 characters, values up to 512 characters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public Metadata1ParallelAiResponsesApi? Metadata { get; init; }

    /// <summary>
    /// Reasoning configuration. <c>effort</c> (low/medium/high) controls how much research is performed; defaults to <c>medium</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reasoning")]
    public Reasoning1? Reasoning { get; init; }

    /// <summary>
    /// Background mode is not supported: requests with <c>background=true</c> are rejected with a 422 validation error. Use the Task API (POST /v1/tasks/runs) for long-running work.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("background")]
    public Background1? Background { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
