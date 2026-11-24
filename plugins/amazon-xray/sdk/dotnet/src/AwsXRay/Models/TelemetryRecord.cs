using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record TelemetryRecord
{
    [JsonPropertyName("Timestamp")]
    public required DateTimeOffset Timestamp { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SegmentsReceivedCount")]
    public int? SegmentsReceivedCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SegmentsSentCount")]
    public int? SegmentsSentCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SegmentsSpilloverCount")]
    public int? SegmentsSpilloverCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SegmentsRejectedCount")]
    public int? SegmentsRejectedCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("BackendConnectionErrors")]
    public BackendConnectionErrors? BackendConnectionErrors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
