using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record CoreV1CloudconnectAwsAccountsRequest1
{
    /// <summary>
    /// S3 bucket name for CloudTrail real-time anomaly detection. Required together with s3BucketRegion.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("s3Bucket")]
    public string? S3Bucket { get; init; }

    /// <summary>
    /// AWS region of the S3 bucket. Required together with s3Bucket.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("s3BucketRegion")]
    public string? S3BucketRegion { get; init; }

    /// <summary>
    /// Declares which supported AWS features the caller intends to enable. Values must match feature names configured in awsFeaturePermissions on app/cloud-connect. The value is persisted and returned in account responses. When "real-time-data" is included, s3Bucket and s3BucketRegion are required; when it is not included, s3Bucket and s3BucketRegion are not allowed.
    /// </summary>
    [JsonPropertyName("enabledFeatures")]
    public required IReadOnlyList<string> EnabledFeatures { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
