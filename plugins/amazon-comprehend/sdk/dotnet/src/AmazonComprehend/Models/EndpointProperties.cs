using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;
using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Models;

public record EndpointProperties
{
    /// <summary>
    /// The Amazon Resource Number (ARN) of the endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndpointArn")]
    public string? EndpointArn { get; init; }

    /// <summary>
    /// Specifies the status of the endpoint. Because the endpoint updates and creation are asynchronous, so customers will need to wait for the endpoint to be Ready status before making inference requests.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Status")]
    public Status3? Status { get; init; }

    /// <summary>
    /// Specifies a reason for failure in cases of Failed status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Message")]
    public string? Message { get; init; }

    /// <summary>
    /// The Amazon Resource Number (ARN) of the model to which the endpoint is attached.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ModelArn")]
    public string? ModelArn { get; init; }

    /// <summary>
    /// ARN of the new model to use for updating an existing endpoint. This ARN is going to be different from the model ARN when the update is in progress
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DesiredModelArn")]
    public string? DesiredModelArn { get; init; }

    /// <summary>
    /// The desired number of inference units to be used by the model using this endpoint. Each inference unit represents of a throughput of 100 characters per second.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DesiredInferenceUnits")]
    public int? DesiredInferenceUnits { get; init; }

    /// <summary>
    /// The number of inference units currently used by the model using this endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CurrentInferenceUnits")]
    public int? CurrentInferenceUnits { get; init; }

    /// <summary>
    /// The creation date and time of the endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTime")]
    public DateTimeOffset? CreationTime { get; init; }

    /// <summary>
    /// The date and time that the endpoint was last modified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LastModifiedTime")]
    public DateTimeOffset? LastModifiedTime { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to trained custom models encrypted with a customer managed key (ModelKmsKeyId).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DataAccessRoleArn")]
    public string? DataAccessRoleArn { get; init; }

    /// <summary>
    /// Data access role ARN to use in case the new model is encrypted with a customer KMS key.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DesiredDataAccessRoleArn")]
    public string? DesiredDataAccessRoleArn { get; init; }

    /// <summary>
    /// The Amazon Resource Number (ARN) of the flywheel
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FlywheelArn")]
    public string? FlywheelArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
