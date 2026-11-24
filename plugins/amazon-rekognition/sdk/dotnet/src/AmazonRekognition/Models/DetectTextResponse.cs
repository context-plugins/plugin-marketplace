using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DetectTextResponse
{
    /// <summary>
    /// An array of text that was detected in the input image.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TextDetections")]
    public IReadOnlyList<TextDetection>? TextDetections { get; init; }

    /// <summary>
    /// The model version used to detect text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TextModelVersion")]
    public string? TextModelVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
