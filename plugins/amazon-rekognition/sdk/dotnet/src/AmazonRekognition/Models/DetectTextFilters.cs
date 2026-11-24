using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;

namespace AmazonRekognition.Models;

public record DetectTextFilters
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("WordFilter")]
    public DetectionFilter? WordFilter { get; init; }

    /// <summary>
    /// A Filter focusing on a certain area of the image. Uses a BoundingBox object to set the region of the image.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RegionsOfInterest")]
    public IReadOnlyList<RegionOfInterest>? RegionsOfInterest { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
