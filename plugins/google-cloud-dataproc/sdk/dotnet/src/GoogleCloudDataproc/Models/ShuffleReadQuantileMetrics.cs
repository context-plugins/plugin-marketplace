using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

public record ShuffleReadQuantileMetrics
{
    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remoteReqsDuration")]
    public Quantiles? RemoteReqsDuration { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("readBytes")]
    public Quantiles? ReadBytes { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remoteBytesRead")]
    public Quantiles? RemoteBytesRead { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remoteBytesReadToDisk")]
    public Quantiles? RemoteBytesReadToDisk { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("remoteBlocksFetched")]
    public Quantiles? RemoteBlocksFetched { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fetchWaitTimeMillis")]
    public Quantiles? FetchWaitTimeMillis { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("readRecords")]
    public Quantiles? ReadRecords { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("shufflePushReadMetrics")]
    public ShufflePushReadQuantileMetrics? ShufflePushReadMetrics { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("localBlocksFetched")]
    public Quantiles? LocalBlocksFetched { get; init; }

    /// <summary>
    /// Quantile metrics data related to Tasks. Units can be seconds, bytes, milliseconds, etc depending on the message type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("totalBlocksFetched")]
    public Quantiles? TotalBlocksFetched { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
