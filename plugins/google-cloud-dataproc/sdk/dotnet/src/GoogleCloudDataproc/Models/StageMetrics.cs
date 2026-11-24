using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Stage Level Aggregated Metrics
/// </summary>
public record StageMetrics
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("peakExecutionMemoryBytes")]
    public string? PeakExecutionMemoryBytes { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executorDeserializeCpuTimeNanos")]
    public string? ExecutorDeserializeCpuTimeNanos { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("diskBytesSpilled")]
    public string? DiskBytesSpilled { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executorCpuTimeNanos")]
    public string? ExecutorCpuTimeNanos { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executorRunTimeMillis")]
    public string? ExecutorRunTimeMillis { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("memoryBytesSpilled")]
    public string? MemoryBytesSpilled { get; init; }

    /// <summary>
    /// Metrics about the input read by the stage.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stageInputMetrics")]
    public StageInputMetrics? StageInputMetrics { get; init; }

    /// <summary>
    /// Shuffle data read for the stage.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stageShuffleReadMetrics")]
    public StageShuffleReadMetrics? StageShuffleReadMetrics { get; init; }

    /// <summary>
    /// Shuffle data written for the stage.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stageShuffleWriteMetrics")]
    public StageShuffleWriteMetrics? StageShuffleWriteMetrics { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resultSerializationTimeMillis")]
    public string? ResultSerializationTimeMillis { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jvmGcTimeMillis")]
    public string? JvmGcTimeMillis { get; init; }

    /// <summary>
    /// Metrics about the output written by the stage.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stageOutputMetrics")]
    public StageOutputMetrics? StageOutputMetrics { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resultSize")]
    public string? ResultSize { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executorDeserializeTimeMillis")]
    public string? ExecutorDeserializeTimeMillis { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
