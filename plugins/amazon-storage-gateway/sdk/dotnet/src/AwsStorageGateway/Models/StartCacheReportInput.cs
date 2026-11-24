using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record StartCacheReportInput
{
    [JsonPropertyName("FileShareARN")]
    public required string FileShareArn { get; init; }

    /// <summary>
    /// The ARN of the IAM role used when saving the cache report to Amazon S3.
    /// </summary>
    [JsonPropertyName("Role")]
    public required string Role { get; init; }

    /// <summary>
    /// The ARN of the Amazon S3 bucket where you want to save the cache report. We do not recommend saving the cache report to the same Amazon S3 bucket for which you are generating the report. This field does not accept access point ARNs.
    /// </summary>
    [JsonPropertyName("LocationARN")]
    public required string LocationArn { get; init; }

    /// <summary>
    /// The Amazon Web Services Region of the Amazon S3 bucket where you want to save the cache report.
    /// </summary>
    [JsonPropertyName("BucketRegion")]
    public required string BucketRegion { get; init; }

    /// <summary>
    /// The DNS name of the VPC endpoint associated with the Amazon S3 where you want to save the cache report. Optional.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("VPCEndpointDNSName")]
    public string? VpcEndpointDnsName { get; init; }

    /// <summary>
    /// The list of filters and parameters that determine which files are included in the report. You must specify at least one value for InclusionFilters or ExclusionFilters in a StartCacheReport request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("InclusionFilters")]
    public IReadOnlyList<CacheReportFilter>? InclusionFilters { get; init; }

    /// <summary>
    /// The list of filters and parameters that determine which files are excluded from the report. You must specify at least one value for InclusionFilters or ExclusionFilters in a StartCacheReport request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ExclusionFilters")]
    public IReadOnlyList<CacheReportFilter>? ExclusionFilters { get; init; }

    /// <summary>
    /// A unique identifier that you use to ensure idempotent report generation if you need to retry an unsuccessful StartCacheReport request. If you retry a request, use the same ClientToken you specified in the initial request.
    /// </summary>
    [JsonPropertyName("ClientToken")]
    public required string ClientToken { get; init; }

    /// <summary>
    /// A list of up to 50 key/value tags that you can assign to the cache report. Using tags can help you categorize your reports and more easily locate them in search results.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
