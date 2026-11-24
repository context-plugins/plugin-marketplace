using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record GetTextDetectionResponse
{
    /// <summary>
    /// Current status of the text detection job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobStatus")]
    public JobStatusAmazonRekognitionTextDetectionApi? JobStatus { get; init; }

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
    /// An array of text detected in the video. Each element contains the detected text, the time in milliseconds from the start of the video that the text was detected, and where it was detected on the screen.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TextDetections")]
    public IReadOnlyList<TextDetectionResult>? TextDetections { get; init; }

    /// <summary>
    /// If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// Version number of the text detection model that was used to detect text.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TextModelVersion")]
    public string? TextModelVersion { get; init; }

    /// <summary>
    /// Job identifier for the text detection operation for which you want to obtain results. The job identifer is returned by an initial call to StartTextDetection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobId")]
    public string? JobId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Video")]
    public Video? Video { get; init; }

    /// <summary>
    /// A job identifier specified in the call to StartTextDetection and returned in the job completion notification sent to your Amazon Simple Notification Service topic.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobTag")]
    public string? JobTag { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
