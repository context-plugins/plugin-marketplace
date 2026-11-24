using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;
using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Models;

public record CacheReportInfo
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the cache report you want to describe.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CacheReportARN")]
    public string? CacheReportArn { get; init; }

    /// <summary>
    /// The status of the specified cache report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CacheReportStatus")]
    public CacheReportStatus? CacheReportStatus { get; init; }

    /// <summary>
    /// The percentage of the report generation process that has been completed at time of inquiry.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ReportCompletionPercent")]
    public int? ReportCompletionPercent { get; init; }

    /// <summary>
    /// The time at which the gateway stopped generating the cache report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("EndTime")]
    public DateTimeOffset? EndTime { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Role")]
    public string? Role { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FileShareARN")]
    public string? FileShareArn { get; init; }

    /// <summary>
    /// The ARN of the Amazon S3 bucket location where the cache report is saved.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("LocationARN")]
    public string? LocationArn { get; init; }

    /// <summary>
    /// The time at which the gateway started generating the cache report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("StartTime")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// The list of filters and parameters that determine which files are included in the report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("InclusionFilters")]
    public IReadOnlyList<CacheReportFilter>? InclusionFilters { get; init; }

    /// <summary>
    /// The list of filters and parameters that determine which files are excluded from the report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ExclusionFilters")]
    public IReadOnlyList<CacheReportFilter>? ExclusionFilters { get; init; }

    /// <summary>
    /// The file name of the completed cache report object stored in Amazon S3.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ReportName")]
    public string? ReportName { get; init; }

    /// <summary>
    /// The list of key/value tags associated with the report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
