using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record IndexFacesResponseAmazonRekognitionOperationsApi
{
    /// <summary>
    /// An array of faces detected and added to the collection. For more information, see Searching Faces in a Collection in the Amazon Rekognition Developer Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FaceRecords")]
    public IReadOnlyList<FaceRecord>? FaceRecords { get; init; }

    /// <summary>
    /// If your collection is associated with a face detection model that's later than version 3.0, the value of OrientationCorrection is always null and no orientation information is returned. If your collection is associated with a face detection model that's version 3.0 or earlier, the following applies: If the input image is in .jpeg format, it might contain exchangeable image file format (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this orientation information to perform image correction - the bounding box coordinates are translated to represent object locations
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OrientationCorrection")]
    public OrientationCorrection2? OrientationCorrection { get; init; }

    /// <summary>
    /// The version number of the face detection model that's associated with the input collection (CollectionId).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FaceModelVersion")]
    public string? FaceModelVersion { get; init; }

    /// <summary>
    /// An array of faces that were detected in the image but weren't indexed. They weren't indexed because the quality filter identified them as low quality, or the MaxFaces request parameter filtered them out. To use the quality filter, you specify the QualityFilter request parameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UnindexedFaces")]
    public IReadOnlyList<UnindexedFace>? UnindexedFaces { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
