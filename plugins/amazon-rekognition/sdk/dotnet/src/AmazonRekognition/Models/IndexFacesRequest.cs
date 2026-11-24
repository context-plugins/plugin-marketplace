using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record IndexFacesRequest
{
    /// <summary>
    /// The ID of an existing collection to which you want to add the faces that are detected in the input images.
    /// </summary>
    [JsonPropertyName("CollectionId")]
    public required string CollectionId { get; init; }

    [JsonPropertyName("Image")]
    public required Image Image { get; init; }

    /// <summary>
    /// The ID you want to assign to all the faces detected in the image.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ExternalImageId")]
    public string? ExternalImageId { get; init; }

    /// <summary>
    /// An array of facial attributes you want to be returned. A DEFAULT subset of facial attributes - BoundingBox, Confidence, Pose, Quality, and Landmarks - will always be returned. You can request for specific facial attributes (in addition to the default list) - by using ["DEFAULT", "FACE_OCCLUDED"] or just ["FACE_OCCLUDED"]. You can request for all facial attributes by using ["ALL"]. Requesting more attributes may increase response time. If you provide both, ["ALL", "DEFAULT"], the service uses a logical AND operator to determine which attributes to return (in this case, all attributes).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DetectionAttributes")]
    public IReadOnlyList<DetectionAttribute>? DetectionAttributes { get; init; }

    /// <summary>
    /// The maximum number of faces to index. The value of MaxFaces must be greater than or equal to 1. IndexFaces returns no more than 100 detected faces in an image, even if you specify a larger value for MaxFaces. If IndexFaces detects more faces than the value of MaxFaces, the faces with the lowest quality are filtered out first. If there are still more faces than the value of MaxFaces, the faces with the smallest bounding boxes are filtered out (up to the number that's needed to satisfy the value of MaxFaces). Information about the unindexed faces is available in the UnindexedFaces array. The fac
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MaxFaces")]
    public int? MaxFaces { get; init; }

    /// <summary>
    /// A filter that specifies a quality bar for how much filtering is done to identify faces. Filtered faces aren't indexed. If you specify AUTO, Amazon Rekognition chooses the quality bar. If you specify LOW, MEDIUM, or HIGH, filtering removes all faces that don’t meet the chosen quality bar. The default value is AUTO. The quality bar is based on a variety of common use cases. Low-quality detections can occur for a number of reasons. Some examples are an object that's misidentified as a face, a face that's too blurry, or a face with a pose that's too extreme to use. If you specify NONE, no filterin
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("QualityFilter")]
    public QualityFilterAmazonRekognitionFaceCollectionsApi? QualityFilter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
