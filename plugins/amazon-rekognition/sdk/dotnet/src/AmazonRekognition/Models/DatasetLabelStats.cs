using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DatasetLabelStats
{
    /// <summary>
    /// The total number of images that use the label.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EntryCount")]
    public int? EntryCount { get; init; }

    /// <summary>
    /// The total number of images that have the label assigned to a bounding box.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BoundingBoxCount")]
    public int? BoundingBoxCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
