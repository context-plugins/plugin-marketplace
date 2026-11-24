using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record UnindexedFace
{
    /// <summary>
    /// An array of reasons that specify why a face wasn't indexed. EXTREME_POSE - The face is at a pose that can't be detected. For example, the head is turned too far away from the camera. EXCEEDS_MAX_FACES - The number of faces detected is already higher than that specified by the MaxFaces input parameter for IndexFaces. LOW_BRIGHTNESS - The image is too dark. LOW_SHARPNESS - The image is too blurry. LOW_CONFIDENCE - The face was detected with a low confidence. SMALL_BOUNDING_BOX - The bounding box around the face is too small.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Reasons")]
    public IReadOnlyList<ReasonAmazonRekognitionFaceCollectionsApi>? Reasons { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FaceDetail")]
    public FaceDetail? FaceDetail { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
