using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

public record TaskQuantileMetrics
{
    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("schedulerDelayMillis")]
    public Quantiles? SchedulerDelayMillis { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executorCpuTimeNanos")]
    public Quantiles? ExecutorCpuTimeNanos { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inputMetrics")]
    public InputQuantileMetrics? InputMetrics { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("diskBytesSpilled")]
    public Quantiles? DiskBytesSpilled { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executorRunTimeMillis")]
    public Quantiles? ExecutorRunTimeMillis { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resultSize")]
    public Quantiles? ResultSize { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shuffleReadMetrics")]
    public ShuffleReadQuantileMetrics? ShuffleReadMetrics { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executorDeserializeTimeMillis")]
    public Quantiles? ExecutorDeserializeTimeMillis { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("jvmGcTimeMillis")]
    public Quantiles? JvmGcTimeMillis { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resultSerializationTimeMillis")]
    public Quantiles? ResultSerializationTimeMillis { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("outputMetrics")]
    public OutputQuantileMetrics? OutputMetrics { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("executorDeserializeCpuTimeNanos")]
    public Quantiles? ExecutorDeserializeCpuTimeNanos { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("durationMillis")]
    public Quantiles? DurationMillis { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("peakExecutionMemoryBytes")]
    public Quantiles? PeakExecutionMemoryBytes { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gettingResultTimeMillis")]
    public Quantiles? GettingResultTimeMillis { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("memoryBytesSpilled")]
    public Quantiles? MemoryBytesSpilled { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shuffleWriteMetrics")]
    public ShuffleWriteQuantileMetrics? ShuffleWriteMetrics { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
