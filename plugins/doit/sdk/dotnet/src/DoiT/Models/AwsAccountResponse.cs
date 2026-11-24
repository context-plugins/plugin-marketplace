using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record AwsAccountResponse
{
    /// <summary>
    /// The AWS account ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accountID")]
    public string? AccountId { get; init; }

    /// <summary>
    /// The ARN of the IAM role.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("roleArn")]
    public string? RoleArn { get; init; }

    /// <summary>
    /// S3 bucket name for real-time anomaly detection. Present only if real-time is enabled.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("s3Bucket")]
    public string? S3Bucket { get; init; }

    /// <summary>
    /// AWS region of the S3 bucket. Present only if s3Bucket exists.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("s3BucketRegion")]
    public string? S3BucketRegion { get; init; }

    /// <summary>
    /// List of supported features and their permission status.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("supportedFeatures")]
    public IReadOnlyList<AwsSupportedFeature>? SupportedFeatures { get; init; }

    /// <summary>
    /// List of supported AWS features enabled by the caller. Returned in the same order as provided.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabledFeatures")]
    public IReadOnlyList<string>? EnabledFeatures { get; init; }

    /// <summary>
    /// ISO 8601 timestamp of when the role was linked.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeLinked")]
    public string? TimeLinked { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
