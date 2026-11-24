using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record FlywheelProperties
{
    /// <summary>
    /// The Amazon Resource Number (ARN) of the flywheel.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FlywheelArn")]
    public string? FlywheelArn { get; init; }

    /// <summary>
    /// The Amazon Resource Number (ARN) of the active model version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ActiveModelArn")]
    public string? ActiveModelArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend permission to access the flywheel data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DataAccessRoleArn")]
    public string? DataAccessRoleArn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TaskConfig")]
    public TaskConfig? TaskConfig { get; init; }

    /// <summary>
    /// Amazon S3 URI of the data lake location.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DataLakeS3Uri")]
    public string? DataLakeS3Uri { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DataSecurityConfig")]
    public DataSecurityConfig? DataSecurityConfig { get; init; }

    /// <summary>
    /// The status of the flywheel.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public Status6? Status { get; init; }

    /// <summary>
    /// Model type of the flywheel's model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ModelType")]
    public ModelType1? ModelType { get; init; }

    /// <summary>
    /// A description of the status of the flywheel.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Message")]
    public string? Message { get; init; }

    /// <summary>
    /// Creation time of the flywheel.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTime")]
    public DateTimeOffset? CreationTime { get; init; }

    /// <summary>
    /// Last modified time for the flywheel.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LastModifiedTime")]
    public DateTimeOffset? LastModifiedTime { get; init; }

    /// <summary>
    /// The most recent flywheel iteration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LatestFlywheelIteration")]
    public string? LatestFlywheelIteration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
