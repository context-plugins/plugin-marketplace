using System.Collections.Generic;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// A text content part of an output message. <c>annotations</c> carries the URL
/// citations grounding the answer.
/// </summary>
public record ResponseOutputText
{
    [JsonPropertyName("annotations")]
    public required IReadOnlyList<AnnotationUrlCitation> Annotations { get; init; }

    [JsonPropertyName("text")]
    public required string Text { get; init; }

    [JsonPropertyName("type")]
    public string Type { get; } = "output_text";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logprobs")]
    public LogprobsParallelAiResponsesApi? Logprobs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
