using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record GetFaceLivenessSessionResultsResponse
{
    /// <summary>
    /// The sessionId for which this request was called.
    /// </summary>
    [JsonPropertyName("SessionId")]
    public required string SessionId { get; init; }

    /// <summary>
    /// Represents a status corresponding to the state of the session. Possible statuses are: CREATED, IN_PROGRESS, SUCCEEDED, FAILED, EXPIRED.
    /// </summary>
    [JsonPropertyName("Status")]
    public required StatusAmazonRekognitionFaceLivenessApi Status { get; init; }

    /// <summary>
    /// Probabalistic confidence score for if the person in the given video was live, represented as a float value between 0 to 100.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Confidence")]
    public double? Confidence { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ReferenceImage")]
    public AuditImage? ReferenceImage { get; init; }

    /// <summary>
    /// A set of images from the Face Liveness video that can be used for audit purposes. It includes a bounding box of the face and the Base64-encoded bytes that return an image. If the CreateFaceLivenessSession request included an OutputConfig argument, the image will be uploaded to an S3Object specified in the output configuration. If no Amazon S3 bucket is defined, raw bytes are sent instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AuditImages")]
    public IReadOnlyList<AuditImage>? AuditImages { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Challenge")]
    public Challenge? Challenge { get; init; }

    /// <summary>
    /// A list of conditions that were detected in the Face Liveness video and that contributed to the returned Confidence score. Each item contains a code and a human-readable message. Feedback is returned only for sessions with a Status of SUCCEEDED, and the list is empty when no such conditions were detected.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Feedback")]
    public IReadOnlyList<FeedbackItem>? Feedback { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Metadata")]
    public SessionMetadata? Metadata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
