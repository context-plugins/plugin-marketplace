using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record DetectFacesRequest
{
    [JsonPropertyName("Image")]
    public required Image Image { get; init; }

    /// <summary>
    /// An array of facial attributes you want to be returned. A DEFAULT subset of facial attributes - BoundingBox, Confidence, Pose, Quality, and Landmarks - will always be returned. You can request for specific facial attributes (in addition to the default list) - by using ["DEFAULT", "FACE_OCCLUDED"] or just ["FACE_OCCLUDED"]. You can request for all facial attributes by using ["ALL"]. Requesting more attributes may increase response time. If you provide both, ["ALL", "DEFAULT"], the service uses a logical "AND" operator to determine which attributes to return (in this case, all attributes). Note t
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Attributes")]
    public IReadOnlyList<AttributeEnum>? Attributes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
