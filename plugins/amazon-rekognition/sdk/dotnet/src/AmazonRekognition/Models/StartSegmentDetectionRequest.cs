using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonRekognition.Core.Models;
using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Models;

public record StartSegmentDetectionRequest
{
    [JsonPropertyName("Video")]
    public required Video Video { get; init; }

    /// <summary>
    /// Idempotent token used to identify the start request. If you use the same token with multiple StartSegmentDetection requests, the same JobId is returned. Use ClientRequestToken to prevent the same job from being accidently started more than once.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ClientRequestToken")]
    public string? ClientRequestToken { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("NotificationChannel")]
    public NotificationChannel? NotificationChannel { get; init; }

    /// <summary>
    /// An identifier you specify that's returned in the completion notification that's published to your Amazon Simple Notification Service topic. For example, you can use JobTag to group related jobs and identify them in the completion notification.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("JobTag")]
    public string? JobTag { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Filters")]
    public StartSegmentDetectionFilters? Filters { get; init; }

    /// <summary>
    /// An array of segment types to detect in the video. Valid values are TECHNICAL_CUE and SHOT.
    /// </summary>
    [JsonPropertyName("SegmentTypes")]
    public required IReadOnlyList<SegmentType> SegmentTypes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
