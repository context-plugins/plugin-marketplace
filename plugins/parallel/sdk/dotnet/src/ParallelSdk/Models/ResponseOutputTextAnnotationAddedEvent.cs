using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Models;

public record ResponseOutputTextAnnotationAddedEvent
{
    /// <summary>
    /// A citation for a web resource used to generate a model response.
    /// </summary>
    [JsonPropertyName("annotation")]
    public required AnnotationUrlCitation Annotation { get; init; }

    [JsonPropertyName("annotation_index")]
    public required int AnnotationIndex { get; init; }

    [JsonPropertyName("content_index")]
    public required int ContentIndex { get; init; }

    [JsonPropertyName("item_id")]
    public required string ItemId { get; init; }

    [JsonPropertyName("output_index")]
    public required int OutputIndex { get; init; }

    [JsonPropertyName("sequence_number")]
    public required int SequenceNumber { get; init; }

    [JsonPropertyName("type")]
    public string Type { get; } = "response.output_text.annotation.added";

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
