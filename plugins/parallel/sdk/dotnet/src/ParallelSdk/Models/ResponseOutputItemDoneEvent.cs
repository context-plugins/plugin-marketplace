using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

public record ResponseOutputItemDoneEvent
{
    /// <summary>
    /// An assistant message produced by the model.
    /// </summary>
    [JsonPropertyName("item")]
    public required ResponseOutputMessage Item { get; init; }

    [JsonPropertyName("output_index")]
    public required int OutputIndex { get; init; }

    [JsonPropertyName("sequence_number")]
    public required int SequenceNumber { get; init; }

    [JsonPropertyName("type")]
    public string Type { get; } = "response.output_item.done";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
