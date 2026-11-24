using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record BoundingBox
{
    /// <summary>
    /// Width of the bounding box as a ratio of the overall image width.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Width")]
    public double? Width { get; init; }

    /// <summary>
    /// Height of the bounding box as a ratio of the overall image height.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Height")]
    public double? Height { get; init; }

    /// <summary>
    /// Left coordinate of the bounding box as a ratio of overall image width.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Left")]
    public double? Left { get; init; }

    /// <summary>
    /// Top coordinate of the bounding box as a ratio of overall image height.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Top")]
    public double? Top { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
