using System.Text.Json.Serialization;
using ParallelSdk.Core.Models;
using ParallelSdk.Models.AnyOf;

namespace ParallelSdk.Models;

/// <summary>
/// A single content part of a message, e.g.
/// <c>{"text": "hi", "type": "input_text"}</c>. Only text parts are supported;
/// requests containing image, audio, or file parts fail with a 422 error.
/// </summary>
public record ResponseInputContentPart
{
    /// <summary>
    /// The content part type. Supported: <c>input_text</c>, <c>output_text</c>, and <c>text</c>. Multimodal types (<c>input_image</c>, <c>input_audio</c>, <c>input_file</c>) are rejected with a 422 error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeParallelAiResponsesApi? Type { get; init; }

    /// <summary>
    /// The text payload, when the part carries one.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public Text? Text { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
