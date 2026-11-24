using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record BoundingBox
{
    /// <summary>
    /// The height of the bounding box as a ratio of the overall document page height.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Height")]
    public double? Height { get; init; }

    /// <summary>
    /// The left coordinate of the bounding box as a ratio of overall document page width.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Left")]
    public double? Left { get; init; }

    /// <summary>
    /// The top coordinate of the bounding box as a ratio of overall document page height.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Top")]
    public double? Top { get; init; }

    /// <summary>
    /// The width of the bounding box as a ratio of the overall document page width.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Width")]
    public double? Width { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
