using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Metadata for the security report.
/// </summary>
public record GoogleCloudApigeeV1SecurityReportMetadata
{
    /// <summary>
    /// MIME type / Output format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mimeType")]
    public string? MimeType { get; init; }

    /// <summary>
    /// Query GroupBy time unit. Example: "seconds", "minute", "hour"
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeUnit")]
    public string? TimeUnit { get; init; }

    /// <summary>
    /// Start timestamp of the query range.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTimestamp")]
    public string? StartTimestamp { get; init; }

    /// <summary>
    /// Dimensions of the SecurityReport.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dimensions")]
    public IReadOnlyList<string>? Dimensions { get; init; }

    /// <summary>
    /// Metrics of the SecurityReport. Example: ["name:bot_count,func:sum,alias:sum_bot_count"]
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metrics")]
    public IReadOnlyList<string>? Metrics { get; init; }

    /// <summary>
    /// End timestamp of the query range.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTimestamp")]
    public string? EndTimestamp { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
