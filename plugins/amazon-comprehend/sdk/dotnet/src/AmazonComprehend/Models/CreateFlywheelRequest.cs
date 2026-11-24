using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record CreateFlywheelRequest
{
    /// <summary>
    /// Name for the flywheel.
    /// </summary>
    [JsonPropertyName("FlywheelName")]
    public required string FlywheelName { get; init; }

    /// <summary>
    /// To associate an existing model with the flywheel, specify the Amazon Resource Number (ARN) of the model version. Do not set TaskConfig or ModelType if you specify an ActiveModelArn.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ActiveModelArn")]
    public string? ActiveModelArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend the permissions required to access the flywheel data in the data lake.
    /// </summary>
    [JsonPropertyName("DataAccessRoleArn")]
    public required string DataAccessRoleArn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TaskConfig")]
    public TaskConfig? TaskConfig { get; init; }

    /// <summary>
    /// The model type. You need to set ModelType if you are creating a flywheel for a new model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ModelType")]
    public ModelType? ModelType { get; init; }

    /// <summary>
    /// Enter the S3 location for the data lake. You can specify a new S3 bucket or a new folder of an existing S3 bucket. The flywheel creates the data lake at this location.
    /// </summary>
    [JsonPropertyName("DataLakeS3Uri")]
    public required string DataLakeS3Uri { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DataSecurityConfig")]
    public DataSecurityConfig? DataSecurityConfig { get; init; }

    /// <summary>
    /// A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ClientRequestToken")]
    public string? ClientRequestToken { get; init; }

    /// <summary>
    /// The tags to associate with this flywheel.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
