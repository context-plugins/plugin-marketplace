using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DetectLabelsImageQuality
{
    /// <summary>
    /// The brightness of an image provided for label detection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Brightness")]
    public double? Brightness { get; init; }

    /// <summary>
    /// The sharpness of an image provided for label detection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Sharpness")]
    public double? Sharpness { get; init; }

    /// <summary>
    /// The contrast of an image provided for label detection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Contrast")]
    public double? Contrast { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
