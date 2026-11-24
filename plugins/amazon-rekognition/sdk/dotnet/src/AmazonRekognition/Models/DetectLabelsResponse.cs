using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record DetectLabelsResponse
{
    /// <summary>
    /// An array of labels for the real-world objects detected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Labels")]
    public IReadOnlyList<Label>? Labels { get; init; }

    /// <summary>
    /// The value of OrientationCorrection is always null. If the input image is in .jpeg format, it might contain exchangeable image file format (Exif) metadata that includes the image's orientation. Amazon Rekognition uses this orientation information to perform image correction. The bounding box coordinates are translated to represent object locations after the orientation information in the Exif metadata is used to correct the image orientation. Images in .png format don't contain Exif metadata. Amazon Rekognition doesn’t perform image correction for images in .png format and .jpeg images without
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OrientationCorrection")]
    public OrientationCorrectionAmazonRekognitionFacialAnalysisApi? OrientationCorrection { get; init; }

    /// <summary>
    /// Version number of the label detection model that was used to detect labels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LabelModelVersion")]
    public string? LabelModelVersion { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ImageProperties")]
    public DetectLabelsImageProperties? ImageProperties { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
