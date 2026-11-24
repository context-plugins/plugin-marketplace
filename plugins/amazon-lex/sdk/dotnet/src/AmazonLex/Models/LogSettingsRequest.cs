using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record LogSettingsRequest
{
    /// <summary>
    /// The type of logging to enable. Text logs are delivered to a CloudWatch Logs log group. Audio logs are delivered to an S3 bucket.
    /// </summary>
    [JsonPropertyName("logType")]
    public required LogType1 LogType { get; init; }

    /// <summary>
    /// Where the logs will be delivered. Text logs are delivered to a CloudWatch Logs log group. Audio logs are delivered to an S3 bucket.
    /// </summary>
    [JsonPropertyName("destination")]
    public required Destination1 Destination { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the AWS KMS customer managed key for encrypting audio logs delivered to an S3 bucket. The key does not apply to CloudWatch Logs and is optional for S3 buckets.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kmsKeyArn")]
    public string? KmsKeyArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the CloudWatch Logs log group or S3 bucket where the logs should be delivered.
    /// </summary>
    [JsonPropertyName("resourceArn")]
    public required string ResourceArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
