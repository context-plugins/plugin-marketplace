using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record GetFaceDetectionResponse
{
    /// <summary>
    /// The current status of the face detection job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobStatus")]
    public JobStatusAmazonRekognitionOperationsApi? JobStatus { get; init; }

    /// <summary>
    /// If the job fails, StatusMessage provides a descriptive error message.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StatusMessage")]
    public string? StatusMessage { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VideoMetadata")]
    public VideoMetadata? VideoMetadata { get; init; }

    /// <summary>
    /// If the response is truncated, Amazon Rekognition returns this token that you can use in the subsequent request to retrieve the next set of faces.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// An array of faces detected in the video. Each element contains a detected face's details and the time, in milliseconds from the start of the video, the face was detected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Faces")]
    public IReadOnlyList<FaceDetection>? Faces { get; init; }

    /// <summary>
    /// Job identifier for the face detection operation for which you want to obtain results. The job identifer is returned by an initial call to StartFaceDetection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobId")]
    public string? JobId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Video")]
    public Video? Video { get; init; }

    /// <summary>
    /// A job identifier specified in the call to StartFaceDetection and returned in the job completion notification sent to your Amazon Simple Notification Service topic.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobTag")]
    public string? JobTag { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
