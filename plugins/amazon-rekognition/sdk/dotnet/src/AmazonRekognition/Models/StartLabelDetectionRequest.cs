using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record StartLabelDetectionRequest
{
    [JsonPropertyName("Video")]
    public required Video Video { get; init; }

    /// <summary>
    /// Idempotent token used to identify the start request. If you use the same token with multiple StartLabelDetection requests, the same JobId is returned. Use ClientRequestToken to prevent the same job from being accidently started more than once.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ClientRequestToken")]
    public string? ClientRequestToken { get; init; }

    /// <summary>
    /// Specifies the minimum confidence that Amazon Rekognition Video must have in order to return a detected label. Confidence represents how certain Amazon Rekognition is that a label is correctly identified.0 is the lowest confidence. 100 is the highest confidence. Amazon Rekognition Video doesn't return any labels with a confidence level lower than this specified value. If you don't specify MinConfidence, the operation returns labels and bounding boxes (if detected) with confidence values greater than or equal to 50 percent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MinConfidence")]
    public double? MinConfidence { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NotificationChannel")]
    public NotificationChannel? NotificationChannel { get; init; }

    /// <summary>
    /// An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic. For example, you can use JobTag to group related jobs and identify them in the completion notification.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobTag")]
    public string? JobTag { get; init; }

    /// <summary>
    /// The features to return after video analysis. You can specify that GENERAL_LABELS are returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Features")]
    public IReadOnlyList<FeatureAmazonRekognitionStoredVideoAnalysisApi>? Features { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Settings")]
    public LabelDetectionSettings? Settings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
