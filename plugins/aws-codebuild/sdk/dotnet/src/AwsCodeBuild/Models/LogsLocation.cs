using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record LogsLocation
{
    /// <summary>
    /// The name of the CloudWatch Logs group for the build logs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("groupName")]
    public string? GroupName { get; init; }

    /// <summary>
    /// The name of the CloudWatch Logs stream for the build logs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("streamName")]
    public string? StreamName { get; init; }

    /// <summary>
    /// The URL to an individual build log in CloudWatch Logs. The log stream is created during the PROVISIONING phase of a build and the deeplink will not be valid until it is created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deepLink")]
    public string? DeepLink { get; init; }

    /// <summary>
    /// The URL to a build log in an S3 bucket.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("s3DeepLink")]
    public string? S3DeepLink { get; init; }

    /// <summary>
    /// The ARN of the CloudWatch Logs stream for a build execution. Its format is arn:${Partition}:logs:${Region}:${Account}:log-group:${LogGroupName}:log-stream:${LogStreamName}. The CloudWatch Logs stream is created during the PROVISIONING phase of a build and the ARN will not be valid until it is created. For more information, see Resources Defined by CloudWatch Logs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cloudWatchLogsArn")]
    public string? CloudWatchLogsArn { get; init; }

    /// <summary>
    /// The ARN of S3 logs for a build project. Its format is arn:${Partition}:s3:::${BucketName}/${ObjectName}. For more information, see Resources Defined by Amazon S3.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("s3LogsArn")]
    public string? S3LogsArn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cloudWatchLogs")]
    public CloudWatchLogsConfig? CloudWatchLogs { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("s3Logs")]
    public S3LogsConfig? S3Logs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
