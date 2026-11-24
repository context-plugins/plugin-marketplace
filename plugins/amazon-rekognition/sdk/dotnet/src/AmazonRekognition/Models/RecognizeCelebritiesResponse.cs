using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record RecognizeCelebritiesResponse
{
    /// <summary>
    /// Details about each celebrity found in the image. Amazon Rekognition can detect a maximum of 64 celebrities in an image. Each celebrity object includes the following attributes: Face, Confidence, Emotions, Landmarks, Pose, Quality, Smile, Id, KnownGender, MatchConfidence, Name, Urls.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CelebrityFaces")]
    public IReadOnlyList<Celebrity>? CelebrityFaces { get; init; }

    /// <summary>
    /// Details about each unrecognized face in the image.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("UnrecognizedFaces")]
    public IReadOnlyList<ComparedFace>? UnrecognizedFaces { get; init; }

    /// <summary>
    /// Support for estimating image orientation using the the OrientationCorrection field has ceased as of August 2021. Any returned values for this field included in an API response will always be NULL. The orientation of the input image (counterclockwise direction). If your application displays the image, you can use this value to correct the orientation. The bounding box coordinates returned in CelebrityFaces and UnrecognizedFaces represent face locations before the image orientation is corrected. If the input image is in .jpeg format, it might contain exchangeable image (Exif) metadata that inclu
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("OrientationCorrection")]
    public OrientationCorrection? OrientationCorrection { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
