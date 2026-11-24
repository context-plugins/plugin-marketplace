using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record GetContentModerationResponse
{
    /// <summary>
    /// The current status of the content moderation analysis job.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobStatus")]
    public JobStatusAmazonRekognitionContentModerationApi? JobStatus { get; init; }

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
    /// The detected inappropriate, unwanted, or offensive content moderation labels and the time(s) they were detected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ModerationLabels")]
    public IReadOnlyList<ContentModerationDetection>? ModerationLabels { get; init; }

    /// <summary>
    /// If the response is truncated, Amazon Rekognition Video returns this token that you can use in the subsequent request to retrieve the next set of content moderation labels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NextToken")]
    public string? NextToken { get; init; }

    /// <summary>
    /// Version number of the moderation detection model that was used to detect inappropriate, unwanted, or offensive content.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ModerationModelVersion")]
    public string? ModerationModelVersion { get; init; }

    /// <summary>
    /// Job identifier for the content moderation operation for which you want to obtain results. The job identifer is returned by an initial call to StartContentModeration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobId")]
    public string? JobId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Video")]
    public Video? Video { get; init; }

    /// <summary>
    /// A job identifier specified in the call to StartContentModeration and returned in the job completion notification sent to your Amazon Simple Notification Service topic.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobTag")]
    public string? JobTag { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GetRequestMetadata")]
    public GetContentModerationRequestMetadata? GetRequestMetadata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
