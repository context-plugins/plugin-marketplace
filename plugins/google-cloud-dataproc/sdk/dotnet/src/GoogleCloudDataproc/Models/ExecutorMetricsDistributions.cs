using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

public record ExecutorMetricsDistributions
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quantiles")]
    public IReadOnlyList<double>? Quantiles { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("killedTasks")]
    public IReadOnlyList<double>? KilledTasks { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shuffleWrite")]
    public IReadOnlyList<double>? ShuffleWrite { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shuffleReadRecords")]
    public IReadOnlyList<double>? ShuffleReadRecords { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shuffleWriteRecords")]
    public IReadOnlyList<double>? ShuffleWriteRecords { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("taskTimeMillis")]
    public IReadOnlyList<double>? TaskTimeMillis { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inputBytes")]
    public IReadOnlyList<double>? InputBytes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("diskBytesSpilled")]
    public IReadOnlyList<double>? DiskBytesSpilled { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inputRecords")]
    public IReadOnlyList<double>? InputRecords { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failedTasks")]
    public IReadOnlyList<double>? FailedTasks { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outputRecords")]
    public IReadOnlyList<double>? OutputRecords { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("peakMemoryMetrics")]
    public ExecutorPeakMetricsDistributions? PeakMemoryMetrics { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outputBytes")]
    public IReadOnlyList<double>? OutputBytes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("memoryBytesSpilled")]
    public IReadOnlyList<double>? MemoryBytesSpilled { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("succeededTasks")]
    public IReadOnlyList<double>? SucceededTasks { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shuffleRead")]
    public IReadOnlyList<double>? ShuffleRead { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
