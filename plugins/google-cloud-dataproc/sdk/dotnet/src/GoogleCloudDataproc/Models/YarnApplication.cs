using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// A YARN application created by a job. Application information is a subset of org.apache.hadoop.yarn.proto.YarnProtos.ApplicationReportProto.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
/// </summary>
public record YarnApplication
{
    /// <summary>
    /// Optional. The cumulative memory usage of the application for a job, measured in mb-seconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("memoryMbSeconds")]
    public string? MemoryMbSeconds { get; init; }

    /// <summary>
    /// Required. The numerical progress of the application, from 1 to 100.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("progress")]
    public double? Progress { get; init; }

    /// <summary>
    /// Required. The application state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State? State { get; init; }

    /// <summary>
    /// Required. The application name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Optional. The HTTP URL of the ApplicationMaster, HistoryServer, or TimelineServer that provides application-specific information. The URL uses the internal hostname, and requires a proxy server for resolution and, possibly, access.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trackingUrl")]
    public string? TrackingUrl { get; init; }

    /// <summary>
    /// Optional. The cumulative CPU time consumed by the application for a job, measured in vcore-seconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vcoreSeconds")]
    public string? VcoreSeconds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
