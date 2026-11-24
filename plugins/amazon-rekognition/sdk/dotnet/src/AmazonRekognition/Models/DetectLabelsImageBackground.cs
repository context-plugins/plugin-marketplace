using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DetectLabelsImageBackground
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Quality")]
    public DetectLabelsImageQuality? Quality { get; init; }

    /// <summary>
    /// The dominant colors found in the background of an image, defined with RGB values, CSS color name, simplified color name, and PixelPercentage (the percentage of image pixels that have a particular color).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DominantColors")]
    public IReadOnlyList<DominantColor>? DominantColors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
