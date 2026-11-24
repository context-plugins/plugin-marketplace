using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

/// <summary>
/// Emitted when text content is finalized.
/// </summary>
public record ResponseTextDoneEvent
{
    [JsonPropertyName("content_index")]
    public required int ContentIndex { get; init; }

    [JsonPropertyName("item_id")]
    public required string ItemId { get; init; }

    [JsonPropertyName("logprobs")]
    public required IReadOnlyList<Logprob2> Logprobs { get; init; }

    [JsonPropertyName("output_index")]
    public required int OutputIndex { get; init; }

    [JsonPropertyName("sequence_number")]
    public required int SequenceNumber { get; init; }

    [JsonPropertyName("text")]
    public required string Text { get; init; }

    [JsonPropertyName("type")]
    public string Type { get; } = "response.output_text.done";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
