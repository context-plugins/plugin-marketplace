using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

public record ResponseContentPartDoneEvent
{
    [JsonPropertyName("content_index")]
    public required int ContentIndex { get; init; }

    [JsonPropertyName("item_id")]
    public required string ItemId { get; init; }

    [JsonPropertyName("output_index")]
    public required int OutputIndex { get; init; }

    /// <summary>
    /// A text content part of an output message. <c>annotations</c> carries the URL
    /// citations grounding the answer.
    /// </summary>
    [JsonPropertyName("part")]
    public required ResponseOutputText Part { get; init; }

    [JsonPropertyName("sequence_number")]
    public required int SequenceNumber { get; init; }

    [JsonPropertyName("type")]
    public string Type { get; } = "response.content_part.done";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
