using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record FlywheelIterationProperties
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FlywheelArn")]
    public string? FlywheelArn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FlywheelIterationId")]
    public string? FlywheelIterationId { get; init; }

    /// <summary>
    /// The creation start time of the flywheel iteration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTime")]
    public DateTimeOffset? CreationTime { get; init; }

    /// <summary>
    /// The completion time of this flywheel iteration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndTime")]
    public DateTimeOffset? EndTime { get; init; }

    /// <summary>
    /// The status of the flywheel iteration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public Status5? Status { get; init; }

    /// <summary>
    /// A description of the status of the flywheel iteration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Message")]
    public string? Message { get; init; }

    /// <summary>
    /// The ARN of the evaluated model associated with this flywheel iteration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EvaluatedModelArn")]
    public string? EvaluatedModelArn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EvaluatedModelMetrics")]
    public FlywheelModelEvaluationMetrics? EvaluatedModelMetrics { get; init; }

    /// <summary>
    /// The ARN of the trained model associated with this flywheel iteration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TrainedModelArn")]
    public string? TrainedModelArn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TrainedModelMetrics")]
    public FlywheelModelEvaluationMetrics? TrainedModelMetrics { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EvaluationManifestS3Prefix")]
    public string? EvaluationManifestS3Prefix { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
