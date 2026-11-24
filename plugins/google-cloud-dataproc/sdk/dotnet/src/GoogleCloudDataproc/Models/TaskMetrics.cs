using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Executor Task Metrics
/// </summary>
public record TaskMetrics
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resultSize")]
    public string? ResultSize { get; init; }

    /// <summary>
    /// Shuffle data written by task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shuffleWriteMetrics")]
    public ShuffleWriteMetrics? ShuffleWriteMetrics { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executorCpuTimeNanos")]
    public string? ExecutorCpuTimeNanos { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executorDeserializeCpuTimeNanos")]
    public string? ExecutorDeserializeCpuTimeNanos { get; init; }

    /// <summary>
    /// Metrics about the input data read by the task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inputMetrics")]
    public InputMetrics? InputMetrics { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("diskBytesSpilled")]
    public string? DiskBytesSpilled { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executorRunTimeMillis")]
    public string? ExecutorRunTimeMillis { get; init; }

    /// <summary>
    /// Shuffle data read by the task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shuffleReadMetrics")]
    public ShuffleReadMetrics? ShuffleReadMetrics { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("peakExecutionMemoryBytes")]
    public string? PeakExecutionMemoryBytes { get; init; }

    /// <summary>
    /// Metrics about the data written by the task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outputMetrics")]
    public OutputMetrics? OutputMetrics { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("memoryBytesSpilled")]
    public string? MemoryBytesSpilled { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executorDeserializeTimeMillis")]
    public string? ExecutorDeserializeTimeMillis { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jvmGcTimeMillis")]
    public string? JvmGcTimeMillis { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resultSerializationTimeMillis")]
    public string? ResultSerializationTimeMillis { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
